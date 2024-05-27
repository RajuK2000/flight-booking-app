import { AiOutlineGlobal } from "react-icons/ai"
import { BsPhoneVibrate } from "react-icons/bs"
import { SiConsul } from "react-icons/si"
import flight from "../../Media/flight.png"
import { CgMenuGridO } from "react-icons/cg"
import "./navBar.scss"
import { useState } from "react"


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
            <img src={flight} alt="Flight" className="logo" />
          </div> 
         
         <div className={active}>
          <ul className="menu">
            <li onClick={removeNavbar} className="listItems" >Home</li>
            <li onClick={removeNavbar} className="listItems" >About</li>
            <li onClick={removeNavbar} className="listItems" >Offers</li>
            <li onClick={removeNavbar} className="listItems" >Seats</li>
            <li onClick={removeNavbar} className="listItems" >Distanations</li>
            <li onClick={removeNavbar} className="listItems" >Contact</li>
            {/* <button className="btn flex btnOne">Contact</button> */}
          </ul>
          
          </div>
         <div onClick={showNavbar} className="toggleIcon"><CgMenuGridO className="icon"/> </div>
        </div>
       

      </div>
        
    )
}
export default NavBar