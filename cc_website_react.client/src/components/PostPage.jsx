import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './PostPage.scss';

export default function PostPage() {
    const { slug } = useParams();
    const [articleHtml, setArticleHtml] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [banner, setBanner] = useState(null);
    const [error, setError] = useState(null);

    // Fetch the post HTML from the server
    // Effect triggers whenever the slug changes (i.e. when navigating to a different post)
    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}posts/${slug}/index.html`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`Post not found (${r.status})`);
                }

                return r.text();
            })
            .then(html => {
                const doc = new DOMParser().parseFromString(html, 'text/html');
                setTitle(doc.title);

                // Rewrite relative img src attributes to point to the correct public path
                doc.querySelectorAll('img').forEach(img => {
                    const src = img.getAttribute('src');
                    if (src && !src.startsWith('/') && !src.startsWith('http') && !src.startsWith('data:')) {
                        img.setAttribute('src', `${import.meta.env.BASE_URL}posts/${slug}/${src}`);
                    }
                });

                setArticleHtml(doc.querySelector('article')?.innerHTML ?? html);
                setError(null);
            })
            .catch(e => {
                setArticleHtml('');
                setError(e.message);
            });

        // Fetch post metadata
        fetch(`${import.meta.env.BASE_URL}posts/${slug}/${slug}.json`)
            .then(r => r.ok ? r.json() : null)
            .then(data => {
                setBanner(data?.meta?.banner ?? null);
                setDate(data?.meta?.date ?? '');
            })
            .catch(() => {
                setBanner(null);
                setDate('');
            });
    }, [slug]);

    // Display error if necassary
    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!articleHtml) {
        return <p>Loading...</p>;
    }

    // Only add emoji if date is available
    let dateText = ''
    if (date != '') {
        dateText = '🗓️' + date || ''
    }

    return (
        <div className="post-page">
            <div className="post-page-card">
                {banner && (
                    <div className="post-page-banner-wrapper">
                        <img src={`${import.meta.env.BASE_URL}posts/${slug}/${banner}`} alt={title} className="post-page-banner" />
                    </div>
                )}
                <div className="p-3">
                    <h1 className="post-page-title">{title}</h1>
                    <p>{dateText}</p>
                    {/*Trust me bro, its fine*/}
                    <article className="post-page-content" dangerouslySetInnerHTML={{ __html: articleHtml }} />
                </div>
            </div>
        </div>
    );
}