import React, { useState } from "react"
import "./subscribe.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Subscribe=()=>{
    const [subscribe,setsubscribe]=useState({message:null,set:false})
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    const handleSubscribe=(e)=>{
        e.preventDefault()
        setsubscribe({message:"Thank you for subscribing! We send latest news to your Email",set : true})
    }
    return(
        <div className="subscribe section">
            <div data-aos="fade-down" data-aos-duration="2500" className="sectionContainer container">
                <h2 className="head">Subcribe Newsletters & get Latest News</h2>
        
                    <form onSubmit={handleSubscribe} className="inputDiv flex">
                    <input type="email" placeholder="Enter your email adress" required/>
                    <input type="submit" className="btns"/>
                    </form>
                {
                subscribe.set ? alert(subscribe.message) : null
                }
            </div>
        </div>
    )
}
export default Subscribe