import "./search.css"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Children } from "react";

// THis Code Was search fuctionality....

  
  
//To store  Sky Ids in Local storage....>

// const SkyId= async()=>{
//     const options = {
//         method: 'GET',
//         url: 'https://sky-scanner3.p.rapidapi.com/flights/skyId-list',
//         headers: {
//           'x-rapidapi-key': '85c39f570bmsh6021967c3278783p1143c2jsnae41703e9b6f',
//           'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com'
//         }
//       };
      
//       try {
//           const response = await axios.request(options);
//           console.log(response.data);
//           localStorage.setItem("SkyIDS", JSON.stringify(response.data));
//       } catch (error) {
//           console.error(error);
//       }
// }


//  Flight details...



// const options = {
//   method: 'GET',
//   url: 'https://sky-scanner3.p.rapidapi.com/flights/detail',
//   params: {
//     token: '<REQUIRED>',
//     itineraryId: '<REQUIRED>'
//   },
//   headers: {
//     'X-RapidAPI-Key': '85c39f570bmsh6021967c3278783p1143c2jsnae41703e9b6f',
//     'X-RapidAPI-Host': 'sky-scanner3.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


const Search=()=>{

    const [fromLocation,setFromLocation]=useState('')
    const [toLocation,setToLocation]=useState("")
    const [adults,setAdults]=useState(1)
    const [childrens,setChildrens]=useState(0)
    const [fromDate,setFromDate]=useState("")
    const [toDate,setToDate]=useState("")
    const [classes,setClasses]=useState("")
    


    const GetData=async()=>{
        const options = {
            method: 'GET',
            url: 'https://sky-scanner3.p.rapidapi.com/flights/search-everywhere',
            params: {
              fromEntityId: fromLocation,
              toEntityId: toLocation,
              adults: adults,
              children: childrens,
              cabinClass: classes,
              outboundDate:fromDate ,
              inboundDate: toDate,
            },
            headers: {
              'x-rapidapi-key': '85c39f570bmsh6021967c3278783p1143c2jsnae41703e9b6f',
              'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              document.write(response.data);
          } catch (error) {
              console.error(error);
          }
        }



  useEffect(()=>{
   Aos.init({duration:2000})
  },[])

//   useEffect(()=>{
//     SkyId()
// },[])

    return(
       <div className="search container section">
        <div  data-aos="fade-up" data-aos-duration="2500" className="sectionContainer">

            <div className="btns flex">
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
            
                <div className="singleInput flex">
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
                </div>
            
                <div className="singleInput flex">
                    <div className="iconDiv">
                    <FaRegCalendarAlt  className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>Check In</h4>
                        <input type="date" placeholder="Add Date"
                        value={fromDate}
                        onChange={(e)=>{setFromDate(e.target.value)}}/>
                    </div>
                </div>

                <div className="singleInput flex">
                    <div className="iconDiv">
                    <FaRegCalendarAlt  className="icon"/>
                    </div>
                    <div className="texts">
                        <h4>Check Out</h4>
                        <input type="date" placeholder="Add Date"
                        value={toDate}
                        onChange={(e)=>{setToDate(e.target.value)}}/>
                    </div>
                </div>
            </div>   
            <button className="btn1" onClick={GetData}>Search Flight</button> 
        </div>
       </div>
    )
}
export default Search