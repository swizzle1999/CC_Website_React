import './Weeklies.scss';
import { Row, Col } from 'react-bootstrap';
import { useMeta } from '../hooks/useMeta.js';

export default function Weeklies() {
    useMeta('Weeklies', 'Information about the Caledonian Clash weekly events.');

    return (
        <div className="w-100 mt-2">
            <Row>
                <Col>
                    <div className="card-box">
                        <h2 className="px-2 pt-2">Weeklies</h2>
                        <p>Placeholder text — details about the weekly events will go here.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
