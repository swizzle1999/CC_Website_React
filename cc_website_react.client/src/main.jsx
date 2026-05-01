import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/MainNavbar.jsx';
import About from './components/About.jsx'
import PostList from './components/PostList.jsx'
import PostPage from './components/PostPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<App />} />
                <Route path="about" element={<About />} />
                <Route path="news" element={<PostList />} />
                <Route path="news/:slug" element={<PostPage />} />
            </Routes>
        </BrowserRouter>    
  </StrictMode>,
)
