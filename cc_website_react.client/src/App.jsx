import './App.scss';
import { useEffect, useState } from 'react';
import Post from './components/Post.jsx';
import TwitterFeed from './components/TwitterFeed.jsx';
import { Row, Col, Container, Image } from 'react-bootstrap';

function App() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('../posts/index.json').then(r => r.json()).then(data => setPosts(data.slice(0, 1)));
    }, []);

    return (
        <div className="w-100">
            <Row>
                <Col>
                    <div className="card-box mt-2">
                        <p>Caledonian Clash is a weekly fighting game local that has been running since April 17th 2023. Every Monday night running from 7PM - 10PM. We normally run a fighting game bracket followed by friendly games after.</p>

                        <p>The chosen game for the week is largley decided by what the majority of people want to play however we do rotate in some lesser known games from time to time to add some variety</p>

                        <p>We are a friendly community of like minded gamers who just enjoy pressing buttons and having a laugh with eachother. We are currently an 18+ only community due to the venue being a bar. We are LGBT+ friendly and accepting of all players, regardless of skill level. Please don't feel you have to be 'good' at fighting games to attend, most of us are quite rubbish!</p>

                        <p>We mainly use our discord for communication and planning so feel free to join and chat!</p>

                        {/*<div>*/}
                        {/*    Disabled so that we dont hit rate limit*/}
                        {/*    <TwitterFeed/>*/}
                        {/*</div>*/}

                        {/*Latest news post*/}
                        {/*<div>*/}
                        {/*    {posts.map(post => (*/}
                        {/*        <Post key={post.slug} post={post} />*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                    </div>
                </Col>
                <Col>
                    <Image className="home-image card-box mt-2 w-100" src="caledonian_exterior.jpg" fluid/>
                </Col>
            </Row>
        </div>
    );
}

export default App;