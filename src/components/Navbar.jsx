// import { useNavigate } from "react-router-dom";

export default function Navbar() {

    // const navigate = useNavigate(); 

    return (
        <nav>
            <ul>
                <li>About Me</li>
                <li>Experiences</li>
                <li>Contact Me</li>
            </ul>
            <a href='https://github.com/kenoreyes238'>
                <img src='gitHub.png' alt='github logo'/>
            </a>
            <a href='www.linkedin.com/in/keno-reyes-3b5a47265'>
              <img src='linkedin.png' alt='linkedin logo' />  
            </a>
            <a href='https://www.instagram.com/kxnor.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
              <img src='instagram.png' alt='insta logo' />  
            </a> 
        </nav>
    )
}

// onClick={() => navigate("/AboutMe")