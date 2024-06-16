import React from "react"
import "./subscribe.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Subscribe=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div className="subscribe section">
            <div data-aos="fade-down" data-aos-duration="2500" className="sectionContainer container">
                <h2 className="head">Subcribe Newsletters & get Latest News</h2>
                <div className="inputDiv flex">
                    <input type="text" placeholder="Enter your email adress"/>
                    <button className="btns">Subcribe</button>
                </div>
            </div>
        </div>
    )
}
export default Subscribe