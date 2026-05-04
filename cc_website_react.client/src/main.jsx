import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/MainNavbar.jsx';
import About from './components/About.jsx'
import PostList from './components/PostList.jsx'
import PostPage from './components/PostPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Navbar />
            <div className="mx-3">
                <Routes>
                    <Route path="/" element={<App />} />
                    {/*<Route path="about" element={<About />} />*/}
                    <Route path="news" element={<PostList />} />
                    <Route path="news/:slug" element={<PostPage />} />
                </Routes>
            </div>
        </BrowserRouter>
  </StrictMode>,
)
