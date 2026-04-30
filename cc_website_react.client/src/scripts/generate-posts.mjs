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
if (!fs.existsSync(publicOut)) {
    fs.mkdirSync(publicOut, { recursive: true });
} else {
    fs.rmSync(publicOut, { recursive: true, force: true });
}


const files = fs.readdirSync(contentDir).filter(f => /\.mdx?$/.test(f));
const postsIndex = [];

for (const file of files) {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const { data, content } = matter(raw);
    const slug = (data.slug || file.replace(/\.mdx?$/, '')).replace(/^\d{4}-\d{2}-\d{2}-/, '');
    const meta = { ...data, slug };

    // convert markdown to HTML
    const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
    const htmlContent = String(processed);

    // simple HTML template (customize as needed)
    const html = `<!doctype html>
 <html lang="en">
 <head>
 <meta charset="utf-8">
 <title>${meta.title || 'Post'}</title>
 <meta name="description" content="${(meta.description || '').replace(/"/g, '&quot;')}">
 </head>
 <body>
 <article>
   <h1>${meta.title || ''}</h1>
   <p><time datetime="${meta.date || ''}">${meta.date || ''}</time></p>
   ${htmlContent}
 </article>
 </body>
 </html>`;

    const outDir = path.join(publicOut, slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

    // copy images from the post's image folder (e.g. 2026-04-30-welcome/) to public output
    const imagesSrc = path.join(contentDir, file.replace(/\.mdx?$/, ''));
    copyImages(imagesSrc, outDir);

    // write per-post JSON manifest (optional)
    fs.writeFileSync(path.join(publicOut, `${slug}.json`), JSON.stringify({ meta }), 'utf8');

    postsIndex.push(meta);
}

// write index manifest
fs.writeFileSync(path.join(publicOut, 'index.json'), JSON.stringify(postsIndex.sort((a, b) => new Date(b.date) - new Date(a.date))), 'utf8');

console.log(`Generated ${postsIndex.length} posts to ${publicOut}`);

function copyImages(srcDir, destDir) {
    if (!fs.existsSync(srcDir)) {
        return;
    }

    fs.mkdirSync(destDir, { recursive: true });

    for (const entry of fs.readdirSync(srcDir)) {
        if (IMAGE_EXTENSIONS.test(entry)) {
            fs.copyFileSync(path.join(srcDir, entry), path.join(destDir, entry));
        }
    }
}
