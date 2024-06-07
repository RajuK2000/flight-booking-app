import { BsShieldCheck } from "react-icons/bs"
import { CiBookmarkCheck } from "react-icons/ci"
import { RxCalendar } from "react-icons/rx"
import "./info.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Info=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div className="info section">
            <div className="infoContainer container">

                <div data-aos="fade-right" data-aos-duration="2500" className="titleDiv flex">
                    <h2>Travel to make memories all around the world</h2>
                    <button data-aos="fade-left" data-aos-duration="2500" className="btn">View All</button>
                </div>

                <div className="cardsDiv">

                    <div data-aos="fade-up" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex">
                        <RxCalendar className="icon"/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your phone and book tickets!</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                        <BsShieldCheck className="icon"/>
                        </div>
                        <span className="cardTitle">Smart Checklist</span>
                        <p>You can easily check the various services for it is using your phone!</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                        <CiBookmarkCheck className="icon"/>
                        </div>
                        <span className="cardTitle">Save More</span>
                        <p>You are save more details  for Our services plece use Airline services!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info