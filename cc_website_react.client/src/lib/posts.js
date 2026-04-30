import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.resolve('content/posts');

// Function to get all posts metadata from the content directory
export function getAllPosts() {
    // Read all markdown files from the content directory
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

    // Process each file, extract metadata, and return an array of post metadata
    return files.map(file => {
        const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
        const { data } = matter(raw);
        return { ...data, filename: file };
    }).sort((a, b) => new Date(b.date) - new Date(a.date));

}
