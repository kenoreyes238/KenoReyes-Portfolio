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
            <div className="pfLinks">
                <a href='https://github.com/kenoreyes238'>
                    <img src='gitHub.png' alt='github logo' className="icons"/>
                </a>
                <a href='www.linkedin.com/in/keno-reyes-3b5a47265'>
                    <img src='linkedin.png' alt='linkedin logo' className="icons"/>  
                </a>
                <a href='https://www.instagram.com/kxnor.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                    <img src='instagram.png' alt='insta logo' className="icons"/>  
                </a>   
            </div>
        </nav>
    )
}

// onClick={() => navigate("/AboutMe")