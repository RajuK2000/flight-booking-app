import { AiOutlineGlobal } from "react-icons/ai"
import { BsPhoneVibrate } from "react-icons/bs"
import { SiConsul, SiTurkishairlines } from "react-icons/si"
import { CgMenuGridO } from "react-icons/cg"
import "./navBar.scss"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"
import { signOut } from "firebase/auth"
import { auth } from "../../FireBase/fireBase-Conflicts"
import { Defaultprovider } from "../../Forms/signIn"


const NavBar=()=>{
const [active,setActive] = useState(false)
const signInnavigate = useNavigate()

const userdata=localStorage.getItem("user")
const data=JSON.parse(userdata)
console.log(data)


const handleLogout= async ()=>{
  console.log("kkk...")
  await signOut(auth)
  localStorage.removeItem("token");
  localStorage.removeItem("user")
  signInnavigate("/signIn")
}
const toggleNavbar=()=>{
  setActive(!active)
};

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
            <SiTurkishairlines className="logo"/>
          </div> 
         
         <div className={`navBarMenu ${ active ? "showNavBar" : " "}`}>
          <ul className="menu">
            <li onClick={toggleNavbar} >
              <Link to="/" className="listItems">Home</Link></li>
            <li onClick={toggleNavbar} >
            <Link to="/Destinations" className="listItems">Destinations</Link></li>
            <li onClick={toggleNavbar}>
            <Link to="/Offers" className="listItems">Offers</Link>
            </li>
            <li onClick={toggleNavbar} >
            <Link to="/About" className="listItems">About</Link></li>
            <li onClick={toggleNavbar} >
            <Link to="/Contact" className="listItems">Contact</Link></li>
          </ul>
          
          </div>
         <div onClick={toggleNavbar} className="toggleIcon"><CgMenuGridO className="icon"/> </div>
        </div>
       
      </div>
        
    )
}
export default NavBar