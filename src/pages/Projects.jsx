import Navbar from '../components/Navbar'

export default function Projects() {

    return (
        <div className="projects">
            <Navbar />
            <div className="section">
                <h1>Projects</h1>
            </div>
            <div className="featuredProjects">
                <iframe src="https://yapper-chat.netlify.app/"></iframe>
            </div>
        </div>
    )
}