import './PostList.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Container, Row, Col, Image } from 'react-bootstrap';

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
                    <Container className="ms-0">
                        <Row>
                            <Col xs={ 2}>
                                <Row>
                                    <div className="post-title">
                                        {p.title}
                                    </div>
                                </Row>

                                <Row className="justify-content-center post-thumbnail-wrapper">
                                    <Image src={`../posts/${p.slug}/${p.thumbnail}`} alt={p.title} fluid className="post-thumbnail" />
                                </Row>
                            </Col>

                            <Col className="d-flex flex-column">
                                

                                <Row>
                                    <div>
                                        <div className="d-flex post-description">
                                            {p.description}
                                        </div>
                                    </div>
                                </Row>

                                <Row className="post-date-row mt-auto">
                                    <div className="d-flex post-date">
                                        🗓️ {p.date}
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Link>
            )}
        </div>
    );
}