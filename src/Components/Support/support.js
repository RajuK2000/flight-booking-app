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
                        <p>For travel to Dubai, ensure your passport is valid for at least six months, check if you need a visa based on your nationality, and confirm the latest COVID-19 entry requirements, including any necessary PCR tests or vaccination proof.!</p>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="3500" className="singleInfo">
                        <span className="number colorOne">02</span>
                        <h4>Chauffeur sevices at your arrival</h4>
                        <p>The chauffeur will pick up passengers from their home, hotel, or another specified location and drive them to the airport. Similarly, upon arrival, the chauffeur will be waiting to pick them up and drive them to their destination.!</p>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="4500" className="singleInfo">
                        <span className="number colorTwo">03</span>
                        <h4>Multi-risk travel insurence</h4>
                        <p>Multi-risk travel insurance provides comprehensive coverage, including trip cancellations, medical emergencies, lost luggage, travel delays, and other unforeseen incidents, ensuring peace of mind during your travels!</p>
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