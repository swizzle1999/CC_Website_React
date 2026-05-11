import './PostList.scss';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Post from '../../ui/Post.jsx';
import { useMeta } from '../../../hooks/useMeta.js';

export default function PostList() {
    useMeta('News', 'News and announcements from Caledonian Clash fighting game local in Inverness.');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}posts/index.json`).then(r => r.json()).then(setPosts);
    }, []);

    return (
        <div className="post-items mt-2">
            <Row className="g-3">
                {posts.map(p =>
                    <Post key={p.slug} post={ p }/>
                )}
            </Row>
        </div>
    );
}