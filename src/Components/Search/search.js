import "./search.css"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Search=()=>{
  useEffect(()=>{
   Aos.init({duration:2000})
  },[])

    return(
       <div className="search container section">
        <div  data-aos="fade-up" data-aos-duration="2500" className="sectionContainer">

            <div className="btns flex">
                <div className="singleBtn">
                    <span>Economy</span>
                </div>
                <div className="singleBtn">
                    <span>Businnes Class</span>
                </div>
                <div className="singleBtn">
                    <span>Fisrt Class</span>
                </div>
            </div>

            <div  data-aos="fade-up" data-aos-duration="2500" className="searchInputs flex">

                <div className="singleInput flex">
                    <div className="iconDiv">
                    <CiLocationOn className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>From-Location</h4>
                        <input type="search" placeholder="Where do you want to go ?"/>
                    </div>
                </div>

                <div className="singleInput flex">
                    <div className="iconDiv">
                    <CiLocationOn className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>To-Location</h4>
                        <input type="search" placeholder="Where do you want to go ?"/>
                    </div>
                </div>
            
                <div className="singleInput flex">
                    <div className="iconDiv">
                    <MdOutlinePersonPinCircle className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>Travelers</h4>
                        <input type="number" placeholder="Add guests"/>
                    </div>
                </div>
            
                <div className="singleInput flex">
                    <div className="iconDiv">
                    <FaRegCalendarAlt  className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>Check In</h4>
                        <input type="date" placeholder="Add Date"/>
                    </div>
                </div>

                <div className="singleInput flex">
                    <div className="iconDiv">
                    <FaRegCalendarAlt  className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>Check Out</h4>
                        <input type="date" placeholder="Add Date"/>
                    </div>
                </div>

                <button className="btns">Search Flight</button>


            </div>    
        </div>
       </div>
    )
}
export default Search