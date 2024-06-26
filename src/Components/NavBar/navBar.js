import { AiOutlineGlobal } from "react-icons/ai"
import { BsPhoneVibrate } from "react-icons/bs"
import { SiConsul, SiTurkishairlines } from "react-icons/si"
// import flight from "../../Media/flight.png"
import { CgMenuGridO } from "react-icons/cg"
import "./navBar.scss"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"
// import SignIn from "../../Forms/signIn"
import { signOut } from "firebase/auth"
import { auth } from "../../FireBase/fireBase-Conflicts"
import { Defaultprovider } from "../../Forms/signIn"


const NavBar=()=>{
const [active,setActive]=useState("navBarMenu")

const userdata=localStorage.getItem("user")
const data=JSON.parse(userdata)
console.log(data)

const signInnavigate=useNavigate()

const handleLogout= async ()=>{
  console.log("kkk...")
  await signOut(auth)
  localStorage.removeItem("token");
  localStorage.removeItem("user")
  signInnavigate("/signIn")
}

   const showNavbar=()=>{
    setActive("navBarMenu showNavBar")
   }
   const removeNavbar=()=>{
    setActive("navBarMenu")
   }

  //  const {user} = useContext(Defaultprovider)
  //  console.log(user)
  
    return(

      <div className="navBar">
        <div className="navBarOne flex">
            <div>
            <SiConsul className="icon" />
            </div>
            <div className="none flex">
                <li className="flex"><BsPhoneVibrate className="icon"/>Support</li>
                <li className="flex"><AiOutlineGlobal className="icon"/>Languages</li>
            </div>
            <div className="atb flex">

                <FaUserCircle calssname="usericon"/> 
                {
                data ?
                <Link><span onClick={handleLogout}>Sign Out</span></Link>
                :
                <Link to="signIn"><span>Sign In</span></Link>
                }   
  
            </div>
        </div>

        <div className="navBarTwo navbar_Bg">
          <div className="logoDiv">
            {/* <img src={flight} alt="Flight" className="logo" /> */}
            <SiTurkishairlines className="logo"/>
          </div> 
         
         <div className={active}>
          <ul className="menu">
            <li onClick={removeNavbar} >
              <Link to="/" className="listItems">Home</Link></li>
            <li onClick={removeNavbar} >
            <Link to="/Destinations" className="listItems">Destinations</Link></li>
            <li onClick={removeNavbar}>
            <Link to="/Offers" className="listItems">Offers</Link>
            </li>
            <li onClick={removeNavbar} >
            <Link to="/About" className="listItems">About</Link></li>
            <li onClick={removeNavbar} >
            <Link to="/Contact" className="listItems">Contact</Link></li>
            {/* <button className="btn flex btnOne">Contact</button> */}
          </ul>
          
          </div>
         <div onClick={showNavbar} className="toggleIcon"><CgMenuGridO className="icon"/> </div>
        </div>
       

      </div>
        
    )
}
export default NavBar