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
                        <p className="subtitle"> Pre-book flight amenities (like meals and seats) → Board the plane → Settle in your seat → Enjoy pre-booked services → Relax and unwind.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex col2">
                        <BsShieldCheck className="icon"/>
                        </div>
                        <span className="cardTitle">Smart Checklist</span>
                        <p className="subtitle">Book flight → Check-in online → Pack essentials (ID, tickets, toiletries) → Arrive early → Go through security → Find gate →  Board on time →  Enjoy.</p>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex col4">
                        <MdOutlineSecurity className="icon"/>
                        </div>
                        <span className="cardTitle">Security</span>
                        <p className="subtitle">Follow TSA guidelines, arrive early, prepare liquids separately, remove electronics from bags, and cooperate with screening procedures for a smooth process.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2500" className="singleCard grid card4">
                        <div className="iconDiv flex col3">
                        <CiBookmarkCheck className="icon"/>
                        </div>
                        <span className="cardTitle">Save More</span>
                        <p className="subtitle">Book in advance, use fare comparison sites, travel off-peak, join frequent flyer programs, and pack light to avoid extra fees.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info