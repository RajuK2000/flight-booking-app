import { BsShieldCheck } from "react-icons/bs"
import { CiBookmarkCheck } from "react-icons/ci"
import { RxCalendar } from "react-icons/rx"
import "./info.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { GiWorld } from "react-icons/gi"
import { MdOutlineSecurity } from "react-icons/md"

const Info=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div className="info section">
            <div className="infoContainer container">

                <div data-aos="fade-up" data-aos-duration="2500" className="titleDiv flex">
                    <h2 className="head"><GiWorld />Travel to make memories all around the world<GiWorld /></h2>
                    {/* <button data-aos="fade-left" data-aos-duration="2500" className="btn">View All</button> */}
                </div>

                <div className="cardsDiv">

                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex col1">
                        <RxCalendar className="icon"/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your phone and book tickets!</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex col2">
                        <BsShieldCheck className="icon"/>
                        </div>
                        <span className="cardTitle">Smart Checklist</span>
                        <p>You can easily check the various services for it is using your phone!</p>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex col3">
                        <CiBookmarkCheck className="icon"/>
                        </div>
                        <span className="cardTitle">Save More</span>
                        <p>You are save more details  for Our services plece use Airline services!</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex col4">
                        <MdOutlineSecurity className="icon"/>

                        </div>
                        <span className="cardTitle">Security</span>
                        <p>We are connect all over the world. Your security is responsibility of our travels!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Info