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
            <div className="sectionContainer">

               <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
                <img src={supportImg} alt=""/>
                </div> 

                <div className="grids grid">
                    
                <div data-aos="fade-down" data-aos-duration="2500" className="textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>
                </div>

                <div className="ToBlocks">
                    <div className="block1">
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                        <span className="gridTitle">Help through the airport</span>
                    <p>You can also call airlines from ypur phone and book tickets to one of youur favorate destinations.</p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                        <span className="gridTitle">Priority Boarding</span>
                    <p>You can also call airlines from ypur phone and book tickets to one of youur favorate destinations.</p>
                </div>
                </div>
                 
                  <div className="block2">
                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                        <span className="gridTitle">Care on the flight</span>
                    <p>You can also call airlines from ypur phone and book tickets to one of youur favorate destinations.</p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                        <span className="gridTitle">Chauffur-drive service</span>
                    <p>You can also call airlines from ypur phone and book tickets to one of youur favorate destinations.</p>
                </div>
                </div>
                </div>

                </div>
            </div>
        </div>
    )
}
export default Language