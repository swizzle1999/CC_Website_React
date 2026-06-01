import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const IMAGE_EXTENSIONS = /\.(png|jpe?g|gif|webp|svg|avif)$/i;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectRoot = path.resolve(__dirname, '..');
const contentDir = path.join(projectRoot, 'content', 'posts');
const publicOut = path.join(projectRoot, '..', 'public', 'posts');

// Ensure output directory exists, or clear it if it does
if (fs.existsSync(publicOut)) {
    fs.rmSync(publicOut, { recursive: true, force: true });
}

fs.mkdirSync(publicOut, { recursive: true });


const files = fs.readdirSync(contentDir, { recursive: true }).filter(f => /\.mdx?$/.test(f));
const postsIndex = [];

for (const file of files) {
    const fileName = file.split('\\').shift();
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const { data, content } = matter(raw);
    const slug = fileName;
    const meta = { ...data, slug };

    // convert markdown to HTML
    const processed = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content);
    const htmlContent = String(processed);

    const html = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>${meta.title || 'Post'}</title>
    <meta name="description" content="${(meta.description || '').replace(/"/g, '&quot;')}">
    <meta name="date" content="${(data.date || '')}">
</head>
<body>
    <article>
        ${htmlContent}
    </article>
</body>
</html>`;

    const outDir = path.join(publicOut, fileName);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

    // copy images from the post's folder to public output
    copyImages(contentDir + '\\' + file.split('\\').shift(), outDir);

    // write per-post JSON manifest (optional)
    fs.writeFileSync(path.join(outDir, `${fileName}.json`), JSON.stringify({ meta }), 'utf8');

    postsIndex.push(meta);
}

// write index manifest
const sortedPosts = postsIndex.sort((a, b) => parseDate(b.date) - parseDate(a.date));
fs.writeFileSync(path.join(publicOut, 'index.json'), JSON.stringify(sortedPosts), 'utf8');

// generate sitemap.xml
const BASE_URL = 'https://caledonianclash.co.uk';
const today = new Date().toISOString().split('T')[0];
const staticRoutes = ['/', '/news'];
const staticEntries = staticRoutes.map(route => ({ route, lastmod: today }));
const postEntries = sortedPosts.map(p => ({
    route: `/news/${p.slug}`,
    lastmod: p.date ? parseDate(p.date).toISOString().split('T')[0] : today,
}));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...postEntries].map(({ route, lastmod }) => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>`;
fs.writeFileSync(path.join(publicOut, '..', 'sitemap.xml'), sitemap, 'utf8');

console.log(`Generated ${postsIndex.length} posts to ${publicOut}`);

function copyImages(srcDir, destDir) {
    if (!fs.existsSync(srcDir)) {
        return;
    }

    for (const entry of fs.readdirSync(srcDir)) {
        if (IMAGE_EXTENSIONS.test(entry)) {
            fs.copyFileSync(path.join(srcDir, entry), path.join(destDir, entry));
        }
    }
}

// Parses dates in dd/mm/yyyy format (and falls back to native Date parsing)
function parseDate(dateStr) {
    if (!dateStr) return new Date(0);
    const parts = String(dateStr).split('/');
    if (parts.length === 3) {
        const [dd, mm, yyyy] = parts;
        return new Date(`${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`);
    }
    return new Date(dateStr);
}
