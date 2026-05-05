import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/MainNavbar.jsx';
import PostList from './components/PostList.jsx'
import PostPage from './components/PostPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Navbar />
            <div className="mx-3">
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="news" element={<PostList />} />
                    <Route path="news/:slug" element={<PostPage />} />
                </Routes>
            </div>
            <footer className="site-footer mt-2 mx-3 my-3">
                <p className="mb-0">Made By Swizz</p>
            </footer>
        </BrowserRouter>
  </StrictMode>,
)
