import takeOff from "../../Media/takeOff.png"
import skyVideo from "../../Media/skyVideo.mp4"
import "./home.css"

const Home=()=>{
    return(
        <div className="home container">
            <div className="mainText">
                <h1>Create Ever-lasting Memories with Us</h1>
            </div>
            <div className="homeImages flex">
                <div className="videoDiv">
                  <video src={skyVideo} className="video" autoPlay muted loop></video>
                </div>
                <img src={takeOff} className="plan" alt="Plane"></img>
            </div>
        </div>
    )
}
export default Home