import { BiSolidOffer } from "react-icons/bi"
import Footer from "../Components/Footer/footer"
import NavBar from "../Components/NavBar/navBar"
// import Subscribe from "../Components/Subcribers/Subcribe"
import offerFlight from "../Media/flight-offers.jpg"
import "./offers.scss"
import { BsBank } from "react-icons/bs"
import { PiAirplaneInFlightFill } from "react-icons/pi"
import { MdHolidayVillage } from "react-icons/md"
import { FaCcPaypal, FaFireAlt } from "react-icons/fa"

const Offers=()=>{
    return(
        <>
        <NavBar/>
        <div className="Container">
        <img src={offerFlight} alt="offerimg" className="image"/>
            <div className="subContainer">
               <ul className="Bar">
                <li className="mainlist"><BiSolidOffer className="icon"/>Special Offers</li>
                <li className="list"><BsBank className="icon"/> Bank Offers</li>
                <li className="list"><FaCcPaypal className="icon"/> Payment Apps</li>
                <li className="list"><PiAirplaneInFlightFill className="icon"/> Flight Offers</li>
                <li className="list"><MdHolidayVillage className="icon"/> Holiday Offers</li>
                <li className="list"><FaFireAlt className="icon"/> Hot Deals</li>
               </ul>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Offers