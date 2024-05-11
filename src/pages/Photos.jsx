import Navbar from "../components/Navbar"
import Image from "react-bootstrap/Image"

export default function Photos() {
    return (
        <div className="photos">
            <Navbar />
            <div className="picSection">
                <h1>Photos</h1>
                <h2>WORK IN PROGRESS</h2>
                <div className="row1">
                    <Image src="fullbody.jpg" rounded />
                    <Image src="civic1.jpg" rounded />
                    <Image src="IMG_2339-2.jpg" rounded />
                </div>
                <div className="row2">
                    <Image src="swim.JPG" rounded />
                    <Image src="reyes_keno_mainstage(2).jpg" rounded />
                </div>
            </div>
        </div>
    )
}