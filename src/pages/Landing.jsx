import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";

export default function Landing() {

    const navigate = useNavigate();

    return (
        <div className="landing">
            <Navbar />
            <div className="aboutMe">
                <h1>Frontend Developer & Photographer</h1>
                <h4>Hi , I’m a software developer and photographer in the Sacramento Area. Currently an intern at Bay Valley Tech</h4>
                <h5 onClick={() => navigate("/about")}>See More About Me --&gt;</h5>
            </div>
            <div className="pic">
               <img src="IMG_0056.JPG" /> 
            </div>
            
        </div>
    )
}

{/* <img src='me.JPG' alt='A pic of me' className='myPic'/>
              <div className="aboutMe">
                <h1>Keno Reyes</h1>
                <div className="me">
                    <h3>Who I am</h3>
                    <p>Hey everyone! My name is Keno Reyes and I'm a web and software developer in the Sacramento area. I've been programming since my junior year of high schol and I'm currently still learning and developing more skills as an Intern at Bay Valley Tech. I'm looking forward to growing in my career, as well as getting a job in web or software development in the future.</p>    
                </div>
              </div> */}