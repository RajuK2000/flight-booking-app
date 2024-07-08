import "./search.scss"
import { CiLocationOn } from "react-icons/ci";
// import { MdOutlinePersonPinCircle } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";


const Search=()=>{

    const [fromLocation,setFromLocation]=useState('')
    const [toLocation,setToLocation]=useState("")
    // const [adults,setAdults]=useState(1)
    // const [childrens,setChildrens]=useState(0)
    const [StDate,setStDate]=useState("")
    const [RtDate,setRtDate]=useState("")
    const [classes,setClasses]=useState("")


    useEffect(()=>{
        Aos.init({duration:2000})
       },[])

       const GetData = async()=>{
        try{
        const responce= await axios.get("http://localhost:3030/FlightData",
            {
            params:{
               FromCity: fromLocation,
               ToCity: toLocation,
            //    Adults: adults,
            //    Children: childrens,
               DepartureDate : StDate,
               ReturnDate : RtDate,
               Class: classes
            }
       })
             const Data=responce.data
             Data.length>0 ?  console.log(Data) : console.log("No Data")
    }catch{
        console.log("error")
    }
               
     } 


    return(
       <div className="search container section">
        <div  data-aos="fade-up" data-aos-duration="2500" className="sectionContainer">

            <div className="btns">
                <div className="singleBtn">
                    <span onClick={()=>{setClasses("economy")}}>Economy</span>
                </div>
                <div className="singleBtn">
                    <span onClick={()=>{setClasses("business")}}>Businnes Class</span>
                </div>
                <div className="singleBtn">
                    <span onClick={()=>{setClasses("first")}}>First Class</span>
                </div>
            </div>

            <div  data-aos="fade-up" data-aos-duration="2500" className="searchInputs flex">

                <div className="singleInput flex">
                    <div className="iconDiv">
                    <CiLocationOn className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>From-Location</h4>
                        <input type="search"
                         placeholder="Where do you want to go ?"
                         value={fromLocation} 
                         onChange={(e)=>setFromLocation(e.target.value)}/>
                    </div>
                </div>

                <div className="singleInput flex">
                    <div className="iconDiv">
                    <CiLocationOn className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>To-Location</h4>
                        <input type="text"
                         placeholder="Where do you want to go ?"
                         value={toLocation}
                         onChange={(e)=>{setToLocation(e.target.value)}}/>
                    </div>
                </div>
            
                {/* <div className="singleInput flex">
                    <div className="iconDiv">
                    <MdOutlinePersonPinCircle className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>Adults</h4>
                        <input type="number" placeholder="Add guests"
                        value={adults}
                        onChange={(e)=>{setAdults(e.target.value)}}/>
                    </div>
                </div>
                <div className="singleInput flex">
                    <div className="iconDiv">
                    <MdOutlinePersonPinCircle className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>Childrens</h4>
                        <input type="number" placeholder="Add guests"
                        value={childrens}
                        onChange={(e)=>{setChildrens(e.target.value)}}/>
                    </div>
                </div> */}
            
                <div className="singleInput flex">
                    <div className="iconDiv">
                    <FaRegCalendarAlt  className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>Check In</h4>
                        <input type="date" placeholder="Add Date"
                        value={StDate}
                        onChange={(e)=>{setStDate(e.target.value)}}/>
                    </div>
                </div>

                <div className="singleInput flex">
                    <div className="iconDiv">
                    <FaRegCalendarAlt  className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>Check Out</h4>
                        <input type="date" placeholder="Add Date"
                        value={RtDate}
                        onChange={(e)=>{setRtDate(e.target.value)}}/>
                    </div>
                </div>
            </div>   
            <button className="btn1" onClick={GetData}>Search Flight</button> 
            {/* <button>click</button> */}
        </div>
       </div>
    )
}
export default Search