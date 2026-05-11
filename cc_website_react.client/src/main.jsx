import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/layout/MainNavbar.jsx';
import PostList from './components/pages/news/PostList.jsx'
import PostPage from './components/pages/news/PostPage.jsx'
import NoMansLand from './components/pages/NoMansLand/NoMansLand.jsx'
import Weeklies from './components/pages/Weeklies/Weeklies.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Navbar />
            <div className="mx-3">
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="news" element={<PostList />} />
                    <Route path="news/:slug" element={<PostPage />} />
                    <Route path="nml4" element={<NoMansLand />} />
                    <Route path="weeklies" element={<Weeklies />} />
                </Routes>
            </div>
            <footer className="site-footer mt-2 mx-3 my-3">
                <p className="mb-0">Made By Swizz</p>
            </footer>
        </BrowserRouter>
  </StrictMode>,
)
