import "./support.scss"
import Window from "../../Media/wind.jpg" 
// import Flight from "../../Media/takeOff.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import dub from "../../Media/dub.jpg"
import flt1 from "../../Media/flt1.jpeg"
import flt2 from "../../Media/flt2.jpeg"
import flt3 from "../../Media/flt3.jpeg"

const Support=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return(
        <div className="support container section">
            <div className="sectionContainer">
              <div className="titileDiv">
                <small>Travel support</small>
                <h2 className="head">Plane your travel with Confidence</h2>
                <p>Find help with booking and travel plans, See what to along the journey!</p>
              </div>
          
              <div className="infoDiv grid">

                 <div className="textDiv">

                    <div data-aos="fade-down" data-aos-duration="2500" className="singleInfo">
                        <span className="number">01</span>
                        <h4> Travel Information and Support</h4>
                        <p>Travel information and support services are designed to help passengers manage their travel plans, stay
                             informed about their flights, and receive assistance when needed. These services can significantly enhance
                              the travel experience by providing timely information and resolving issues efficiently. </p>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="3500" className="singleInfo">
                        <span className="number colorOne">02</span>
                        <h4>Chauffeur sevices at your arrival</h4>
                        <p>The chauffeur will pick up passengers from their home, hotel, or another specified location
                             and drive them to the airport. Similarly, upon arrival, the chauffeur will be waiting to pick them 
                             up and drive them to their destination.!</p>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="4500" className="singleInfo">
                        <span className="number colorTwo">03</span>
                        <h4>Multi-risk travel insurence</h4>
                        <p>Multi-risk travel insurance provides comprehensive coverage, including trip cancellations, medical 
                            emergencies, lost luggage, travel delays, and other unforeseen incidents, ensuring peace of mind during 
                            your travels!</p>
                    </div>

                 </div>

                <div data-aos="fade-up" data-aos-duration="4500" className="imgDiv">
                    <img src={flt1} alt="" className="img1"/>
                    <img src={flt2} alt="" className="img2"/>
                    <img src={flt3} alt="" className="img3"/>
                    
                </div>

             </div>        
            </div>
        </div>
    ) 
}
export default Support