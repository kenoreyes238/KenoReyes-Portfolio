import Navbar from '../components/Navbar'

export default function Projects() {

    return (
        <div className="projects">
            <Navbar />
            <div className="section">
                <h1>Projects</h1>
            </div>
            <div className="featuredProjects">
                <div className="row1">
                   <iframe src="https://yapper-chat.netlify.app/" height={800} width={800}></iframe> 
                   <iframe src="https://kreyes-pokedex-search.netlify.app" height={800} width={800}></iframe>
                </div>
            </div>
        </div>
    )
}