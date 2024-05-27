import "./support.scss"
import Window from "../../Media/window.jpg" 
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Support=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return(
        <div className="support container section">
            <div className="sectionContainer">
              
              <div className="titileDiv">
                <small>Travel support</small>
                <h2>Plane your travel with Confidence</h2>
                <p>find help with booking and travel plans, see what to along the journey!</p>
              </div>
          
              <div className="infoDiv grid">

                 <div className="textDiv grid">

                    <div  data-aos="fade-down" data-aos-duration="2500" className="singleInfo">
                        <span className="number">01</span>
                        <h4>Travel requirenemts for Dubai</h4>
                        <p>find help with booking and travel plans, see what to along the journey to your favourite distinations!</p>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="3500" className="singleInfo">
                        <span className="number colorOne">02</span>
                        <h4>Chauffeur sevices at your arrival</h4>
                        <p>find help with booking and travel plans, see what to along the journey to your favourite distinations!</p>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="4500" className="singleInfo">
                        <span className="number colorTwo">03</span>
                        <h4>Multi-risk travel insurence</h4>
                        <p>find help with booking and travel plans, see what to along the journey to your favourite distinations!</p>
                    </div>

                 </div>

                <div data-aos="fade-left" data-aos-duration="4500" className="imgDiv">
                    <img src={Window} alt=""></img>
                </div>

             </div>        
            </div>
        </div>
    ) 
}
export default Support