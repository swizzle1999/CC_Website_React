import './Post.scss';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

export default function Post({ post }) {
    return (
        <Col key={post.slug} xs={12} sm={6} lg={4}>
            <Link className="post-item d-flex flex-column h-100" to={'/news/' + post.slug}>
                <div className="post-thumbnail-wrapper">
                    <img src={`${import.meta.env.BASE_URL}posts/${post.slug}/${post.thumbnail}`} alt={post.title} className="post-thumbnail" />
                </div>
                <div className="p-2 d-flex flex-column flex-grow-1">
                    <div className="post-title">{post.title}</div>
                    <div className="post-description mt-1">{post.description}</div>
                    <div className="post-date mt-auto pt-2">🗓️ {post.date}</div>
                </div>
            </Link>
        </Col>
    );
}