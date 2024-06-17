import "./traveler.scss"
import paris from "../../Media/paris.png"
import person from "../../Media/person.jpeg"
import person2 from "../../Media/person2.jpeg"
import IndGate from "../../Media/indianGate.jpeg"
import dubai from "../../Media/dubai.jpeg"
import dubaiPerson from "../../Media/dubaiPerson.jpeg"
import japan from "../../Media/japan.jpg"
import japanPerson from "../../Media/japanPerson.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


// const travelers=[
   
//     {
//         id:2,
//         destinationImage: IndGate,
//         travelerImage:person2 ,
//         travelerName:"Rajiv" ,
//         socialLink: "@Rajiv12"
//     },
//     {
//         id:3,
//         destinationImage: japan,
//         travelerImage:japanPerson,
//         travelerName:"Khufua" ,
//         socialLink: "@Kuku5210"
//     },
//     {
//         id:4,
//         destinationImage: dubai,
//         travelerImage:dubaiPerson,
//         travelerName:"AliKhan" ,
//         socialLink: "@Alik%420"
//     }
// ]
const Travelars=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos="fade-down" data-aos-duration="2500" >Top travelers of this month!</h2>

                <div className="travelersContainer">
                 {/* { */}
                    {/* travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{ */}
                        {/* return( */}

                            <div data-aos="fade-up" data-aos-duration="2500"  className="singleTraveler1">
                            <img  src={paris} className="destinationImage" alt="mk"/>
                            <div className="travelerDetails">
                                <div className="travelerPictucres">
                                    <img src={person} className="travelerImage" alt="mj"/>
                                </div>
                                <div className="travelerName">
                                    <span>Alian</span>
                                   <p> @Alian@yy201</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="2500"  className="singleTraveler2">
                            <img  src={IndGate} className="destinationImage" alt="mk"/>
                            <div className="travelerDetails">
                                <div className="travelerPictucres">
                                    <img src={person2} className="travelerImage" alt="mj"/>
                                </div>
                                <div className="travelerName">
                                    <span>Rajiv</span>
                                   <p> @Rajiv12</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="2500"  className="singleTraveler3">
                            <img  src={japan} className="destinationImage" alt="mk"/>
                            <div className="travelerDetails">
                                <div className="travelerPictucres">
                                    <img src={japanPerson} className="travelerImage" alt="mj"/>
                                </div>
                                <div className="travelerName">
                                    <span>Khufua</span>
                                   <p> @Kuku5210</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="2500"  className="singleTraveler4">
                            <img  src={dubai} className="destinationImage" alt="mk"/>
                            <div className="travelerDetails">
                                <div className="travelerPictucres">
                                    <img src={dubaiPerson} className="travelerImage" alt="mj"/>
                                </div>
                                <div className="travelerName">
                                    <span>AliKhan</span>
                                   <p>@Alik%420</p>
                                </div>
                            </div>
                        </div>
                        {/* // )
                    // })
                 }       */}
                </div>
            </div>
        </div>
    )
}
export default Travelars