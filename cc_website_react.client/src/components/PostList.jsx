import './PostList.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

export default function PostList() {
    const [posts, setPosts] = useState([]);
    // TODO: 
    useEffect(() => {
        fetch('../posts/index.json').then(r => r.json()).then(setPosts);
    }, []);

    return (
        <div className="post-items mt-2">
            <Row className="g-3">
                {posts.map(p =>
                    <Col key={p.slug} xs={12} sm={6} lg={4}>
                        <Link className="post-item d-flex flex-column h-100" to={'/news/' + p.slug}>
                            <div className="post-thumbnail-wrapper">
                                <img src={`../posts/${p.slug}/${p.thumbnail}`} alt={p.title} className="post-thumbnail" />
                            </div>
                            <div className="p-2 d-flex flex-column flex-grow-1">
                                <div className="post-title">{p.title}</div>
                                <div className="post-description mt-1">{p.description}</div>
                                <div className="post-date mt-auto pt-2">🗓️ {p.date}</div>
                            </div>
                        </Link>
                    </Col>
                )}
            </Row>
        </div>
    );
}