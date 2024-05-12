import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate(); 

    return (
        <nav>
            <div className="mainNav">
                <h3 onClick={() => navigate("/")}>Keno Reyes</h3>
                <ul className="navigation">
                    <li onClick={() => navigate("/projects")}>Projects</li>
                    <li onClick={() => navigate("/photos")}>Photos</li>
                    <li onClick={() => navigate("/contact")}>Contact Me</li>
                </ul>  
            </div>
        </nav>
    )
}

// onClick={() => navigate("/AboutMe")