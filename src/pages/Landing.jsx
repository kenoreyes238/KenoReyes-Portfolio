import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button"

export default function Landing() {

    const navigate = useNavigate();

    const resumeClick = () => {
        window.open("Resume1.pdf");
    }

    return (
        <div className="landingPage">
            <Navbar />
            <div className="landing">
                <div className="landingMe">
                    <h1>Frontend Developer & Photographer</h1>
                    <h4>A web developer and photographer in the Sacramento Area. Currently an intern at Bay Valley Tech</h4>
                    <Button onClick={() => navigate("/projects")} variant="outline-light">Click to view my projects -&gt;</Button>
                </div>
                <div className="pic">
                    <img src="IMG_0056.JPG" /> 
                </div>
            </div>
            <div className="aboutMe">
                <h3>About</h3>
                <h1>Keno Reyes</h1>
                <div className="abtRow">
                   <img src="mask1.png" /> 
                   <div className="description">
                    <p>
                        Keno Reyes is a Sacramento based web developer who specializes in front-end work using react JS. 
                        Keno has worked on team projects, as well as some independent projects during his time at Bay Valley Tech.
                        Although he does mostly front-end work, he also works on some back-end development using Firebase, Node.js, 
                        mySQL, and Express. 
                    </p>
                    <p>
                        Occasionally, Keno also does some photography on the side, photoshooting for events, portraits, landscapes and cars.
                        His passion started in high school when he attended a photography and later developed his skills as a member of 
                        the Yearbook Staff.
                    </p>
                    <p>
                        During his free time, he likes to work out at the gym. He also enjoys doing recreational activities with either himself
                        or with friends, which includes: swimming, rock climbing, etc. Besides staying healthy and fit, he likes to play some
                        games on his pc, go on trips, and just overall have some fun and keeping his life in balance. 
                    </p>
                   </div>
                </div>
            </div>
            <div className="experience">
                <div className="expHeader">
                   <h1>Experiences</h1> 
                   <a onClick={resumeClick}>
                        <Button variant="outline-light">Click to view Resume</Button>
                   </a>
                </div>
                <div className="expJobs">
                    <div className="expJobsHead">
                        <h3>Bay Valley Tech</h3>
                        <h4>November 2023 - Present</h4>
                        <p>
                            Collaborate with team and team lead to plan out and build a functional messaging
                            app and Tech Job Search Page. Built functional components and front-end design 
                            using React JS, JavaScript, and CSS for personal and professional projects.
                            Utilized Firebase, Node.js, MySQL, and Express for backend development for personal and 
                            professional projects.
                        </p>
                    </div>
                    <div className="expJobsHead starbucks">
                        <h3>Starbucks</h3>
                        <h4>October 2021 - December 2023</h4>
                        <p>
                            Collaborate with other employees and shift supervisor to succeed 
                            in store performance. Dealing with customer satisfaction, uncooperative 
                            machinery, or limited inventory. Taking action to order detail, ringing up 
                            customer orders and making drinks.    
                        </p> 
                    </div>
                </div>
                <div className="education">
                    <h2>Education</h2>
                    <h4>Cosumnes River College</h4>
                    <h5>Major: Computer Science | August 2021 - Present</h5>
                    <p>
                        <strong>Relevant Coursework:</strong> Introduction to Computer Info Science,
                        Introduction to Structured Programming, Algorithm Design/ Problem Solving with 
                        C++, Introduction to Object-Oriented Programming with Java
                    </p>
                </div>
                <div className="certificates">
                    <h2>Certificates</h2>
                    <div className="row1">
                        <img src="HTML.jpg"  alt="HTML Module Certification"/>
                        <img src="ResponsiveCSS.jpg" alt="Responsive CSS Certification" />
                    </div>
                    <div className="row2">
                        <img src="ContentManagement.jpg" alt="Content Management Certification" />
                        <img src="JavaScript.jpg" alt="JavaScript Certification" />
                    </div>
                    <div className="row3">
                        <img src="AsyncJS.jpg" alt="Async JavaScript Certification" />
                        <img src="ReactJS.jpg" alt="ReactJS Certification" />
                    </div>
                </div>
            </div>
        </div>
    )
}