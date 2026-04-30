import './PostList.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';

export default function PostList() {
    const [posts, setPosts] = useState([]);
    // TODO: 
    useEffect(() => {
        fetch('../posts/index.json').then(r => r.json()).then(setPosts);
    }, []);

    return (
        <div className="post-items">
            {posts.map(p =>
                <Link className="post-item mt-2" key={p.slug} to={'/news/' + p.slug}>
                    <Container>
                        <Row>
                            <Col>
                                {p.slug}
                            </Col>
                        </Row>
                    </Container>
                </Link>
            )}
        </div>
    );
}