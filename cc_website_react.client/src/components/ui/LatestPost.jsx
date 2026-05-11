import './LatestPost.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function LatestPost() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}posts/index.json`)
            .then(r => r.json())
            .then(data => setPost(data[0] ?? null));
    }, []);

    if (!post) return null;

    return (
        <Link className="latest-post mt-2" to={`/news/${post.slug}`}>
            <div className="latest-post-thumbnail-wrapper">
                <img src={`${import.meta.env.BASE_URL}posts/${post.slug}/${post.thumbnail}`} alt={post.title} className="latest-post-thumbnail" />
            </div>
            <div className="latest-post-body">
                <div className="latest-post-label">Latest News</div>
                <div className="latest-post-title">{post.title}</div>
                <div className="latest-post-description">{post.description}</div>
                <div className="latest-post-date mt-auto pt-2">🗓️ {post.date}</div>
            </div>
        </Link>
    );
}
