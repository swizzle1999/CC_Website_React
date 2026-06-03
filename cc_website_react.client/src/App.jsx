import './App.scss';
import EventCalendar from './components/ui/EventCalendar.jsx';
import LatestPost from './components/ui/LatestPost.jsx';
import Countdown from './components/ui/Countdown.jsx';
import { Row, Col, Image } from 'react-bootstrap';
import { useMeta } from './hooks/useMeta.js';

function App() {
    useMeta(null, 'Caledonian Clash is a weekly fighting game local in Inverness, running every Monday from 7PM–10PM at 9 High St, Inverness IV1 1HY. All skill levels welcome.');

    return (
        <div className="w-100">
            <Row>
                <Col>

                    <div className="card-box countdown-container mt-2 d-flex py-2">
                        <Image src={`${import.meta.env.BASE_URL}images/nml4_logo.png`} width="auto" height="150" className="me-5"/>
                        <Countdown targetTime={new Date('2026-08-12T11:00:00')} />
                    </div>

                    <div className="card-box mt-2">
                        <p>Caledonian Clash is a weekly fighting game local that has been running since April 17th 2023. Every Monday night running from 7PM - 10PM. We normally run a fighting game bracket followed by friendly games after.</p>

                        <p>The chosen game for the week is largley decided by what the majority of people want to play however we do rotate in some lesser known games from time to time to add some variety</p>

                        <p>We are a friendly community of like minded gamers who just enjoy pressing buttons and having a laugh with eachother. We are currently an 18+ only community due to the venue being a bar. We are LGBT+ friendly and accepting of all players, regardless of skill level. Please don't feel you have to be 'good' at fighting games to attend, most of us are quite rubbish!</p>

                        <p>We mainly use our discord for communication and planning so feel free to join and chat!</p>
                    </div>

                    <Row className="align-items-stretch">
                        <Col xl className="d-flex flex-column">
                            <div className="home-image-wrapper card-box mt-2">
                                <Image className="home-image" src={`${import.meta.env.BASE_URL}images/caledonian_exterior.jpg`} fluid />
                            </div>
                            <div className="card-box mt-2 justify-content-center">
                                <p className="text-center mb-0">9 High St, Inverness IV1 1HY</p>
                            </div>
                        </Col>
                        <Col xl className="d-flex flex-column">
                            <LatestPost />
                            <EventCalendar />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default App;