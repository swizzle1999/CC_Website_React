import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function PostPage() {
    const { slug } = useParams();
    const [articleHtml, setArticleHtml] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);

    // Fetch the post HTML from the server
    // Effect triggers whenever the slug changes (i.e. when navigating to a different post)
    useEffect(() => {
        fetch(`/posts/${slug}/index.html`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`Post not found (${r.status})`);
                }

                return r.text();
            })
            .then(html => {
                const doc = new DOMParser().parseFromString(html, 'text/html');
                setTitle(doc.title);
                setArticleHtml(doc.querySelector('article')?.innerHTML ?? html);
                setError(null);
            })
            .catch(e => {
                setArticleHtml('');
                setError(e.message);
            });
    }, [slug]);

    // Display error if necassary
    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!articleHtml) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <title>{title}</title>
            <article dangerouslySetInnerHTML={{ __html: articleHtml }} />
        </>
    );
}