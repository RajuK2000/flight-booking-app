import React from "react"
import "./footer.scss"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { SiTurkishairlines } from "react-icons/si";



const Footer=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div className="footer">

            <div className="sectionContainer container grid">
                 <div data-aos="fade-down" data-aos-duration="2500" className="gridOne">
                    <div className="logoDiv">
                        <SiTurkishairlines className="Logo"/>
                    </div>
                    <p className="quote">Your mind should be stronger than your feelings,fly!</p>
                    <div className="socialIcon flex">
                    <FaFacebook className="icon"/>
                    <FaSquareXTwitter className="icon"/>
                    <FaYoutube className="icon"/>
                    <FaInstagramSquare className="icon"/>
                    </div>
                 </div>

                 <div  data-aos="fade-down" data-aos-duration="2500" className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">Flight Status</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href="">Check-In</a>
                    </li>
                    <li>
                        <a href="">Manage your booking</a>
                    </li>
                 </div>

                 <div data-aos="fade-down" data-aos-duration="2500" className="footerLinks">
                    <span className="linkTitle">Quick Guide</span>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">How to</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Baggage</a>
                    </li>
                    <li>
                        <a href="">Route Map</a>
                    </li>
                    <li>
                        <a href="">Our Communities</a>
                    </li>
                 </div>

                 <div data-aos="fade-down" data-aos-duration="2500" className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="#">Chauffuer</a>
                    </li>
                    <li>
                        <a href="#">Our partners</a>
                    </li>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Transportation</a>
                    </li>
                    <li>
                        <a href="">Programme Rules</a>
                    </li>
                 </div>
            </div>
            <div className="copyRightDiv">
                <p>Courtesy Design | Deployed by @RajuKumar#2000</p>
              </div>
        </div>
    )
}
export default Footer