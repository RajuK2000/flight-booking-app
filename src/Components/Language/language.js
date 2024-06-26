import supportImg from "../../Media/support.jpg"
import "./language.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Language=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div className="langue container section">
            <div data-aos="fade-down" data-aos-duration="2500" className="textDiv">
                    <h1 className="head">Unaccompanied Minor Lounge</h1>
                </div>
            <div className="sectionContainer">

               <div data-aos="fade-down" data-aos-duration="2500" className="imgDiv">
                <img src={supportImg} alt="" className="image"/>
                </div> 

                <div className="grids grid">
                    
                <div className="ToBlocks">
                    <div className="block1">
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                        <span className="gridTitle"><u>Help through the airport</u></span>
                    <p><b>Check-in</b> (online or at the counter) → <b>Security</b> (ID and boarding pass) → <b>Find your gate</b> (follow signs) → <b>Board the plane</b> (when your group is called).</p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                        <span className="gridTitle"><u>Priority Boarding</u></span>
                    <p><b>Check-in</b> (online or priority counter) → <b>Security</b> (priority lane) → <b>Lounge</b> (if applicable) → <b>Find your gate</b> → <b>Board the plane</b> (priority boarding when called).</p>
                </div>
                </div>
                 
                  <div className="block2">
                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                        <span className="gridTitle"><u>Care on the flight</u></span>
                     <p><b>Stay hydrated, move around periodically, use neck support, adjust air vents</b>, and <b>relax with entertainment</b> or <b>sleep.</b></p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                        <span className="gridTitle"><u>Chauffur-drive service</u></span>
                    <p><b> Book service</b> (through airline) → <b>Confirm details</b> (pickup time and location) → <b>Meet chauffeur</b> (at designated spot) → <b>Ride to airport</b> → <b>Drop-off at terminal..</b></p>
                </div>
                </div>
                </div>

                </div>
            </div>
        </div>
    )
}
export default Language