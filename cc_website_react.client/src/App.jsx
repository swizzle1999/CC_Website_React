import './App.scss';
import { useEffect, useState } from 'react';
import Post from './components/Post.jsx';
import EventCalendar from './components/EventCalendar.jsx';
import { Row, Col, Image, Stack } from 'react-bootstrap';

function App() {
    const [post, setPost] = useState(null);
    const featuredSlug = 'nml4';

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}posts/index.json`)
            .then(r => r.json())
            .then(data => setPost(data.find(p => p.slug === featuredSlug) ?? null));
    }, []);

    return (
        <div className="w-100">
            <Row>
                <Col>
                    <Stack>
                        <div className="card-box mt-2">
                            <p>Caledonian Clash is a weekly fighting game local that has been running since April 17th 2023. Every Monday night running from 7PM - 10PM. We normally run a fighting game bracket followed by friendly games after.</p>

                            <p>The chosen game for the week is largley decided by what the majority of people want to play however we do rotate in some lesser known games from time to time to add some variety</p>

                            <p>We are a friendly community of like minded gamers who just enjoy pressing buttons and having a laugh with eachother. We are currently an 18+ only community due to the venue being a bar. We are LGBT+ friendly and accepting of all players, regardless of skill level. Please don't feel you have to be 'good' at fighting games to attend, most of us are quite rubbish!</p>

                            <p>We mainly use our discord for communication and planning so feel free to join and chat!</p>
                        </div>

                        {/*TODO: Implement a "Pinned news" section. The styling is a bit weird cause it uses the styling form the Post component on the post list page*/}
                        {/*<div className="mt-2">*/}
                        {/*    {post && <Post className="col-12" post={post} />}*/}
                        {/*</div>*/}
                    </Stack>
                </Col>
                <Col>
                    <Stack>
                        <Image className="home-image card-box mt-2 w-100" src={`${import.meta.env.BASE_URL}caledonian_exterior.jpg`} fluid />
                        <div className="card-box mt-2 justify-content-center">
                            <p className="text-center mb-0">9 High St, Inverness IV1 1HY</p>
                        </div>
                    </Stack>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <EventCalendar />
                </Col>
            </Row>
        </div>
    );
}

export default App;