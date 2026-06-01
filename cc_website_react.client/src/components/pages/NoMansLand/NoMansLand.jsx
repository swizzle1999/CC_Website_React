import './NoMansLand.scss';
import { Row, Col } from 'react-bootstrap';
import { useMeta } from '../../../hooks/useMeta.js';
import ImageCarousel from '../../ui/ImageCarousel.jsx';

export default function NoMansLand() {
    useMeta("No Man's Land", "No Man's Land - Fighting Game Tournament - NML - Caledonian Clash.");

    return (
        <div className="w-100 mt-2">
            <div className="card-box">
                <div className="nml-content">
                    <h2 className="mb-3">No Man&apos;s Land</h2>
                    <Row className="g-4">
                        <Col md={7}>
                            <p className="lead">No Man&apos;s Land began as a small grassroots fighting game event in the Highlands of Scotland, built by a community that simply wanted somewhere to play, compete, and bring people together.</p>
                            <p>For years, most major fighting game events in the UK have happened further south, meaning players from the Highlands often had to travel long distances just to be part of the scene. No Man&apos;s Land was created to change that — to give the north of Scotland its own place on the map.</p>
                            <p>What started as a local event has slowly grown into something much bigger. Every year, more players make the journey north to Inverness to compete in games like Street Fighter, Tekken, Guilty Gear and more, while also experiencing the atmosphere that makes the Highlands unique.</p>
                            <p>But No Man&apos;s Land has never just been about brackets. It&apos;s about community — road trips with friends, late night casuals, meeting new people, and building something meaningful in a part of the country that&apos;s often overlooked when it comes to esports and gaming events.</p>
                            <p>We&apos;re proud to represent Highland grassroots gaming, and even prouder of the people who continue to support and grow the event year after year.</p>
                            <p>This year, No Man&apos;s Land returns to the Lochardil House Hotel for its fourth iteration. Whether you&apos;re a long-time competitor or attending your very first tournament, No Man&apos;s Land is built for everyone.</p>
                            <p><a href="https://start.gg/NML4">https://start.gg/NML4</a></p>
                            <blockquote className="nml-quote">Make the journey north.</blockquote>
                        </Col>
                        <Col md={5}>
                            <ImageCarousel manifest="images/pages/NoMansLand/gallery.json" />
                            <div className="d-flex justify-content-center">
                                <a href="https://www.flickr.com/photos/200598567@N05/albums/72177720328950064">Photos By Gaz Robinson </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
