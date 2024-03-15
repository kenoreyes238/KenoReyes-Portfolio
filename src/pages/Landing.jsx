import Navbar from '../components/Navbar'

export default function Landing() {
    return (
        <div>
            <Navbar />
            <div className='landing'>
              <img src='me.JPG' alt='A pic of me' className='myPic'/>
              <div className="aboutMe">
                <h1>Keno Reyes</h1>
                <div className="me">
                    <h3>Who I am</h3>
                    <p>Hey everyone! My name is Keno Reyes and I'm a web and software developer in the Sacramento area. I've been programming since my junior year of high schol and I'm currently still learning and developing more skills as an Intern at Bay Valley Tech. I'm looking forward to growing in my career, as well as getting a job in web or software development in the future.</p>    
                </div>
              </div>
            </div>
            <div className='photo'>
                <h4>I also do Photography! Click to view my <a href='https://kenoreyes.myportfolio.com/'>photography portfolio!</a></h4>
            </div>
        </div>
    )
}