import './PostList.scss';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Post from './Post.jsx';

export default function PostList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('../posts/index.json').then(r => r.json()).then(setPosts);
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