import './App.scss';
import { useEffect, useState } from 'react';
import Post from './components/Post.jsx';

function App() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('../posts/index.json').then(r => r.json()).then(data => setPosts(data.slice(0, 1)));
        console.log(posts)
    }, []);

    return (
        <div>
            {posts.map(post => (
                <Post key={post.slug} post={post} />
            ))}
        </div>
    );
}

export default App;