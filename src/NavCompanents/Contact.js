
import Footer from "../Components/Footer/footer"
import NavBar from "../Components/NavBar/navBar"
import Subscribe from "../Components/Subcribers/Subcribe"
import "./Contact.scss"
import {useState } from "react"

const Contact=()=>{
    const [submits,setsubmits]=useState({message:"",data:false})
    const handleClick=(event)=>{
        event.preventDefault();
        setsubmits({message:"Your request was submited We will contact You Soon",data:true})
    }
    
    console.log("hi...")
    return(
        <>
        <NavBar/>
        <div className="Ccontainer">
            <h1>Contact Us</h1>
            <p>Get in touch with us. Provide any queries to us.</p>
            <div className="Mform">
                <form onSubmit={handleClick}>
                    <label for="mail">Your email address*</label><br/>
                    <input type="email" id="mail" name="mail" className="inp" required/><br/>
                    <label for="searching">What were you searching for ?*</label><br/>
                    <input type="search" id="searching" name="search" className="inp" required/><br/>
                    <label for="name">Your Name*</label><br/>
                    <input type="text" id="name" name="name" className="inp" required/><br/>
                    <label for="subject">Subject*</label><br/>
                    <input type="text" id="subject" name="sub" className="inp" required/><br/>
                    <label for="des">Decription*</label><br/>
                    <textarea id="des" name="des" className="inp" required/><br/>
                    <label for="file">Attachments</label><br/>
                    <input type="file" id="file" name="file" className="inp"/><br/>
                    <input type="submit" className="submt"/>
                </form>
                {
                    submits.data ? alert(submits.message) : null
                }
            </div>
        </div>
        <Subscribe/>
        <Footer/>
        </>
        
    )
}
export default Contact