import Navbar from '../components/Navbar'

export default function Projects() {

    return (
        <div className="projects">
            <Navbar />
            <div className="section">
                <h1>Projects</h1>
            </div>
            <div className="featuredProjects">
                <iframe src="https://yapper-chat.netlify.app/" height={800} width={1200} title="Yapper Chat"></iframe> 
                <iframe src="https://kreyes-pokedex-search.netlify.app" height={800} width={1200} title="Pokedex"></iframe>
                <iframe src="https://shop-list-app-kreyes.netlify.app" height={800} width={1200} title="Shopping List App"></iframe>
                <iframe src="https://tic-tac-toe-kreyes.netlify.app" height={800} width={1200} title="Tic Tac Toe"></iframe>
                <iframe src="https://bangers-drum-kit.netlify.app" height={800} width={1200} title="Drum set"></iframe>
                <iframe src="https://email-template-kreyes.netlify.app" height={800} width={1200} title="Bootstrap Email"></iframe>
            </div>
        </div>
    )
}