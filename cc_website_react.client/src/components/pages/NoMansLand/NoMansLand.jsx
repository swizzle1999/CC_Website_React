import './NoMansLand.scss';
import { Row, Col } from 'react-bootstrap';
import { useMeta } from '../../../hooks/useMeta.js';

export default function NoMansLand() {
    useMeta('NoMansLand', 'Information about NoMansLand - Caledonian Clash.');

    return (
        <div className="w-100 mt-2">
            <Row>
                <Col>
                    <div className="card-box">
                        <h2 className="px-2 pt-2">No Man's Land</h2>
                        <p>No Man’s Land began as a small grassroots fighting game event in the Highlands of Scotland, built by a community that simply wanted somewhere to play, compete, and bring people together.

                            For years, most major fighting game events in the UK have happened further south, meaning players from the Highlands often had to travel long distances just to be part of the scene. No Man’s Land was created to change that, to give the north of Scotland its own place on the map.

                            What started as a local event has slowly grown into something much bigger. Every year, more players make the journey north to Inverness to compete in games like Street Fighter, Tekken, Guilty Gear and more, while also experiencing the atmosphere that makes the Highlands unique.

                            But No Man’s Land has never just been about brackets.

                            It’s about community. It’s about road trips with friends, late night casuals, meeting new people, and building something meaningful in a part of the country that’s often overlooked when it comes to esports and gaming events.

                            We’re proud to represent Highland grassroots gaming, and even prouder of the people who continue to support and grow the event year after year.

                            This year, No Man's Land returns to the Lochardil House Hotel for its fourth iteration.

                            Whether you’re a long-time competitor or attending your very first tournament, No Man’s Land is built for everyone.

                            Make the journey north.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
