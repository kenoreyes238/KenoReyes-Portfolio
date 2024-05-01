import './App.css';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Photos from './pages/Photos'
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}
