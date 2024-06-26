import { BrowserRouter, Route, Routes} from "react-router-dom"
import Error from "./Empty"
import Contact from "./Contact"
import Destinations from "./destinations"
import Offers from "./offers"
import About from "./About"
import HomePage from "./Home"
import SignIn from "../Forms/signIn"
import SignUp from "../Forms/signUp"

const NavPath=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomePage}/>
            <Route path="/About" Component={About}/>
            <Route path="/Offers" Component={Offers}/>
            <Route path="/Contact" Component={Contact}/>
            <Route path="/Destinations" Component={Destinations}/>
            <Route path="*" Component={Error}/>  
            <Route path="/signIn"  Component={SignIn}/>
            <Route path="/signUp"  Component={SignUp}/>
        </Routes>
        </BrowserRouter>
    )
}
export default NavPath