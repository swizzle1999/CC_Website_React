import './Nml4.scss';
import { Row, Col } from 'react-bootstrap';
import { useMeta } from '../hooks/useMeta.js';

export default function Nml4() {
    useMeta('NML4', 'Information about NML4 - Caledonian Clash.');

    return (
        <div className="w-100 mt-2">
            <Row>
                <Col>
                    <div className="card-box">
                        <h2 className="px-2 pt-2">NML4</h2>
                        <p>Placeholder text — details about NML4 will go here.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
