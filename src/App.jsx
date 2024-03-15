import './App.css'
import Landing from './pages/Landing'
import Experiences from './pages/Experiences'
// import Contact from './pages/Contact'
// import { Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <div>
            <Landing />
            <Experiences />
            {/* <Contact /> */}
            {/* <Routes>
                <Route index element={<Landing />} />
                <Route path='/experiences' element={<Experiences />} />
                <Route path='/experiences' element={<Contact />} />
            </Routes> */}
        </div>
    )
}