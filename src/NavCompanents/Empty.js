import Footer from "../Components/Footer/footer"
import NavBar from "../Components/NavBar/navBar"
import Fig from "../Media/wind.jpg"
import { ImShocked } from "react-icons/im";
import "./empty.scss"
import { useNavigate } from "react-router-dom";

const Error=()=>{
    const navigation =useNavigate()

    const GotoHome=()=>{
        navigation("/")
    }

    return(
        <>
         <div className="ContainerEm">
            <h1 className="text">404</h1>
            <p className="page">Page is Not Found</p>
            <button onClick={GotoHome} className="btnn">Go to MainPage</button>

         </div>
        </>
    )
}
export default Error