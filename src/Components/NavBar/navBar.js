import { AiOutlineGlobal } from "react-icons/ai"
import { BsPhoneVibrate } from "react-icons/bs"
import { SiConsul, SiTurkishairlines } from "react-icons/si"
import flight from "../../Media/flight.png"
import { CgMenuGridO } from "react-icons/cg"
import "./navBar.scss"
import { useState } from "react"
import { Link } from "react-router-dom"


const NavBar=()=>{
const [active,setActive]=useState("navBarMenu")
const [noBg,setaddBg]=useState("navBarTwo")

   const showNavbar=()=>{
    setActive("navBarMenu showNavBar")
   }
   const removeNavbar=()=>{
    setActive("navBarMenu")
   }
  
   const addBgColor=()=>{
    if(window.scrollY >= 10){
    setaddBg("navBarTwo navbar_Bg")
    }else{
     setaddBg("navBarTwo")
    }
   }
   window.addEventListener("scroll",addBgColor)

    return(
      <div className="navBar">
        <div className="navBarOne flex">
            <div>
            <SiConsul className="icon"/>
            </div>
            <div className="none flex">
                <li className="flex"><BsPhoneVibrate className="icon"/>Support</li>
                <li className="flex"><AiOutlineGlobal className="icon"/>Languages</li>
            </div>
            <div className="atb flex">
                <span>Sign In</span>
                <span>Sign Out</span>

            </div>
        </div>

        <div className={noBg}>
          <div className="logoDiv">
            {/* <img src={flight} alt="Flight" className="logo" /> */}
            <SiTurkishairlines className="logo"/>
          </div> 
         
         <div className={active}>
          <ul className="menu">
            <li onClick={removeNavbar} >
              <Link to="/" className="listItems" >Home</Link></li>
            <li onClick={removeNavbar} >
            <Link to="/About" className="listItems" >About</Link></li>
            <li onClick={removeNavbar}>
            <Link to="/Offers" className="listItems" >Offers</Link>
            </li>
            <li onClick={removeNavbar} >
            <Link to="/Destinations" className="listItems" >Destinations</Link></li>
            <li onClick={removeNavbar} >
            <Link to="/Contact" className="listItems" >Contact</Link></li>
            {/* <button className="btn flex btnOne">Contact</button> */}
          </ul>
          
          </div>
         <div onClick={showNavbar} className="toggleIcon"><CgMenuGridO className="icon"/> </div>
        </div>
       

      </div>
        
    )
}
export default NavBar