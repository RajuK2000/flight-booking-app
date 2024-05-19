import { AiOutlineGlobal } from "react-icons/ai"
import { BsPhoneVibrate } from "react-icons/bs"
import { SiConsul } from "react-icons/si"
import flight from "../../Media/flight.png"
import { CgMenuGridO } from "react-icons/cg"
import "./navBar.css"
import { useState } from "react"


const NavBar=()=>{
const [active,setActive]=useState("navBarMenu")

   const showNavbar=()=>{
    setActive("navBarMenu showNavBar")
   }
   const removeNavbar=()=>{
    setActive("navBarMenu showNavBar")
   }

    return(
      <div className="nav">
        <div className="navBarOne">
            <div>
            <SiConsul/>
            </div>
            <div className="none">
                <li className="flex"><BsPhoneVibrate className="icon"/>Support</li>
                <li className="flex"><AiOutlineGlobal className="icon"/>Languages</li>
            </div>
            <div className="atb">
                <span>Sign In</span>
                <span>Sign Out</span>

            </div>
        </div>

        <div className="navBarTwo">
          <div className="logoDiv">
            <img src={flight} alt="" className="logo" />
          </div> 
         
         <div className={active}>
          <ul className="menu">
            <li onClick={removeNavbar} className="listItems" >Home</li>
            <li onClick={removeNavbar} className="listItems" >About</li>
            <li onClick={removeNavbar} className="listItems" >Offers</li>
            <li onClick={removeNavbar} className="listItems" >Seats</li>
            <li onClick={removeNavbar} className="listItems" >Distanations</li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
          </div>
          {/* <button className="btn flex btnTwo">Contact</button> */}
         <div onClick={showNavbar} className="toggleIcon"><CgMenuGridO className="icon"/> </div>
        </div>
       

      </div>
        
    )
}
export default NavBar