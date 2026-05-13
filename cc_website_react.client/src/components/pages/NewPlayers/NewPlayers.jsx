import './NewPlayers.scss';
import { Row, Col } from 'react-bootstrap';
import { useMeta } from '../../../hooks/useMeta.js';

export default function NewPlayers() {
    useMeta("New Players", "New Players - Getting started with fighting games at Caledonian Clash.");

    return (
        <div className="w-100 mt-2">
            <div className="card-box">
                <div className="new-players-content">
                    <h2 className="mb-3">New Players</h2>
                    <Row className="g-4">
                        <Col md={7}>
                            <p className="lead">Never been to a fighting game tournament before? No problem — everyone starts somewhere, and Caledonian Clash is a great place to begin.</p>
                            <p>Fighting game tournaments can feel intimidating at first, but the community here is welcoming and supportive. Whether you&apos;ve been playing for years at home or just picked up the game, you&apos;ll find people happy to share knowledge, run sets, and help you improve.</p>
                            <p>When you arrive, head to registration to get checked in. From there, you can explore the venue, warm up in the casual setups, and get a feel for the event before your bracket begins.</p>
                            <p>Don&apos;t worry about winning your first time out — most people lose early in their first tournament, and that&apos;s completely normal. What matters is the experience, the matches, and the connections you make along the way.</p>
                            <p>If you&apos;re unsure about anything — the schedule, how brackets work, or which game to enter — feel free to ask any of the staff or other players. The fighting game community thrives on sharing knowledge.</p>
                            <p>We look forward to seeing you at the event. Come ready to play, have fun, and be part of something special.</p>
                            <blockquote className="new-players-quote">Your journey starts here.</blockquote>
                        </Col>
                        <Col md={5}>
                            <p>More information coming soon.</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
