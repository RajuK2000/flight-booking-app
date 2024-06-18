import Footer from "../Components/Footer/footer"
import NavBar from "../Components/NavBar/navBar"
import Fig from "../Media/wind.jpg"
import "./empty.scss"

const Error=()=>{
    return(
        <>
        <NavBar/>
         <div className="Container">
            <div className="text">
                <h1 className="err">404 Error</h1>
                <img src={Fig} alt="" className="image"></img>
            </div>
         </div>
        <Footer/>
        
        </>
    )
}
export default Error