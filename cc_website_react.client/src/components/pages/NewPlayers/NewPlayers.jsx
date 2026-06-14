import './NewPlayers.scss';
import { Row, Col } from 'react-bootstrap';
import { useMeta } from '../../../hooks/useMeta.js';
import ImageCarousel from '../../ui/ImageCarousel.jsx';

export default function NewPlayers() {
    useMeta("New Players", "New Players - Getting started with fighting games at Caledonian Clash.");

    return (
        <div className="w-100 mt-2">
            <div className="card-box">
                <div className="new-players-content">
                    <h2 className="mb-3">New Players</h2>
                    <Row className="g-4">
                        <Col md={6}>
                            <p className="lead">Caledonian Clash is a local that welcomes all players, regardless of experience level!</p>
                            <p>If you haven't played this week's fighting game, or any fighting game at all, don't worry. This local is built around fostering a welcoming environment for everyone! We would love to have you come along and join our community.</p>

                            <h4>Directions</h4>
                            <p>Our local runs every Monday night at the Caledonian Pub, 9 High St, Inverness IV1 1HY. If you drive, there is parking available at <a href="https://en.parkopedia.co.uk/parking/carpark/rainings_stairs/iv2/inverness/?arriving=202606112200&leaving=202606120000">Raining Stairs</a> which is free after 6PM.</p>
                            <p>You can also park at the <a href="https://en.parkopedia.co.uk/parking/carpark/castle_street_town_house/iv2/inverness/?arriving=202606112200&leaving=202606120000">Inverness Castle car park</a> however, it is only free after 8PM </p>
                            <p>When you arrive at the pub, head all the way past the bar and down the stairs.</p>
                        </Col>

                        <Col md={6}>
                            <ImageCarousel manifest="images/pages/NewPlayers/gallery.json" maxHeight="500px" maxWidth="100%" />
                        </Col>
                    </Row>

                    <Row>
                        <h4>What To Bring</h4>

                            <dl className="row">
                                <dt className="col-sm-3">
                                    Controller
                                </dt>
                                <dd  className="col-sm-9">
                                    We mainly use PS5s for our setups. If possible bring your own controller. We have spares but do run out from time to time!
                                </dd>

                                <dt className="col-sm-3">
                                    Wingman FGC or similar adapter
                                </dt>
                                <dd  className="col-sm-9">
                                    If your controller is not an official PS5 controller, you may need an adapter to use it on our setups. We recommend the <a href="https://www.brookaccessory.com/products/wingmanfgc/index.html">Wingman FGC</a>, but there are other options available. Please make sure your controller is compatible with the adapter you choose. If you are unsure, please ask in our Discord server and we will be happy to help you out! We do have some spares but we can't guarantee that we will have one available for you on the night.
                                </dd>

                                <dt className="col-sm-3">
                                    Entry Fee
                                </dt>
                                <dd  className="col-sm-9">
                                    If this is your first time, don't worry about the entry fee. You are more than welcome to come along and see if it's for you. If you decide you had fun and want to come back, the entry fee is £5. This helps us cover the cost of the venue, equipment and future tournaments. You can use cash or pay via Monzo, more details in the Discord!
                                </dd>
                            </dl>
                            <blockquote className="new-players-quote">Join us in the pit — we can't wait to see you there!</blockquote>
                    </Row>
                </div>
            </div>
        </div>
    );
}
