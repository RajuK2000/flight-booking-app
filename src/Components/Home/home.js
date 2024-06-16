import takeOff from "../../Media/takeOff.png"
import skyVideo from "../../Media/skyVideo.mp4"
import "./home.css"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"


const Home=()=>{
 
    useEffect(()=>{
      Aos.init({duration:2000})
    },[])

    return(
        <div className="home">
            <div className="mainText">
                <h1 data-aos="fade-up" data-aos-duration="2500">Escape the ordinary, embrace the extraordinary.</h1>
            </div>
            <div data-aos="fade-down" data-aos-duration="2500" className="homeImages flex">
                <div className="videoDiv">
                  <video src={skyVideo} className="video" autoPlay muted loop></video>
                </div>
                <img src={takeOff} className="plan" alt="Plane"></img>
            </div>
        </div>
    )
}
export default Home