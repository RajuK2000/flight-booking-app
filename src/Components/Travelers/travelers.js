import "./traveler.scss"
import paris from "../../Media/paris.png"
import person from "../../Media/person.jpeg"
import person2 from "../../Media/person2.jpeg"
import IndGate from "../../Media/indianGate.jpeg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const travelers=[
    {
        id:1,
        destinationImage: paris,
        travelerImage:person ,
        travelerName:"Rajukumar" ,
        socialLink: "@rajuk2000"
    },
    {
        id:2,
        destinationImage: IndGate,
        travelerImage:person2 ,
        travelerName:"Raju" ,
        socialLink: "@rajiv2000"
    },
    {
        id:3,
        destinationImage: paris,
        travelerImage:person ,
        travelerName:"Rajukumar" ,
        socialLink: "@rajuk2000"
    },
    {
        id:4,
        destinationImage: paris,
        travelerImage:person,
        travelerName:"Rajukumar" ,
        socialLink: "@rajuk2000"
    }
]
const Travelars=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos="fade-down" data-aos-duration="2500" >Top travelers of this month!</h2>

                <div className="travelersContainer">
                 {
                    travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
                        return(

                            <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">
                            <img  src={destinationImage} className="destinationImage" alt=""/>
                            <div className="travelerDetails">
                                <div className="travelerPictucres">
                                    <img src={travelerImage} className="travelerImage" alt=""/>
                                </div>
                                <div className="travelerName">
                                    <span>{travelerName}</span>
                                   <p> {socialLink}</p>
                                </div>
                            </div>
                        </div>
                        )

                    })
                 }
                  
                    
                </div>
            </div>
        </div>
    )
}
export default Travelars