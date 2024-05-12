import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Photos from './pages/Photos'
import Contact from './pages/Contact';
// import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AnimatedRoutes from './components/AnimatedRoutes';

export default function App() {

    return (
        <Router>
            {/* <AnimatedRoutes /> */}
            <Navbar />
                <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Landing />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/contact" element={<Contact />} />
         </Routes> 
         <Footer />
        </Router>
    );
}
