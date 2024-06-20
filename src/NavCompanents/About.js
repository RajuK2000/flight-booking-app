import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Footer from "../Components/Footer/footer";
import NavBar from "../Components/NavBar/navBar";
import Subscribe from "../Components/Subcribers/Subcribe";
import "./About.scss"
import { useState } from "react";
import AboutImg from "../Media/about-us.jpg"

const About=()=>{

    const [feedbacks,setfeedbacks]=useState("This Information was Helpfull ?")
    const [feedbacks1,setfeedbacks1]=useState("This Information was Helpfull ?")
    const [feedbacks2,setfeedbacks2]=useState("This Information was Helpfull ?")
    const [feedbacks3,setfeedbacks3]=useState("This Information was Helpfull ?")
    const [feedbacks4,setfeedbacks4]=useState("This Information was Helpfull ?")
    const [feedbacks5,setfeedbacks5]=useState("This Information was Helpfull ?")
    const [feedbacks6,setfeedbacks6]=useState("This Information was Helpfull ?")
    const [feedbacks7,setfeedbacks7]=useState("This Information was Helpfull ?")

      const feedbackClick=()=>{
        setfeedbacks("Thank You for Your Feedback !")
      }
      const feedbackClick1=()=>{
        setfeedbacks1("Thank You for Your Feedback !")
      }
      const feedbackClick2=()=>{
        setfeedbacks2("Thank You for Your Feedback !")
      }
      const feedbackClick3=()=>{
        setfeedbacks3("Thank You for Your Feedback !")
      }
      const feedbackClick4=()=>{
        setfeedbacks4("Thank You for Your Feedback !")
      }
      const feedbackClick5=()=>{
        setfeedbacks5("Thank You for Your Feedback !")
      }
      const feedbackClick6=()=>{
        setfeedbacks6("Thank You for Your Feedback !")
      }
      const feedbackClick7=()=>{
        setfeedbacks7("Thank You for Your Feedback !")
      }
    
    return(
        <>
        <NavBar/>
        <img src={AboutImg} alt="AboutImg" className="HeadImg"></img>
        <div className="Acontainer">    
            <h1 className="heading">Know About</h1>
            <div className="Subcontainer">

                <div>
                    <hr></hr>
                    <details>
                        <summary className="summaryTag">How can we appear in search results?</summary>
                    <p className="Para">
                       If you are a travel agent, airline, hotel or car hire provider and wish to be considered to appear in This App search results, the best way to contact 
                        us is via the contact us section, selecting 'Commercial Enquiry' in the 'What is your message about?' section.
                        If you are interested in advertising on this website, please select ‘Advertise with This App’ in the 'What is your message about?' section.
                        If you are interested in marketing partnerships with Us, please select ‘Marketing’ with this app in the 'What is your message about?' section.
                        We look forward to hearing from you!
                        <div className="feedback">
                         <p className="fedPara">{feedbacks}</p>
                         <div className="YesNo">
                         <button className="yesbtn" onClick={()=>feedbackClick()}>Yes <FaThumbsUp /></button>
                         <button className="yesbtn" onClick={()=>feedbackClick()}>No <FaThumbsDown /></button>
                         </div>
                        </div>

                    </p>
                    </details>   
                    <hr></hr>
                </div>

                <div>
                <details>
                        <summary className="summaryTag">Press and Media enquiries</summary>
                    <p className="Para">
                        If you have any media or press enquiries, please head over to our press room  to find our contacts and for all our recent
                        press releases (please note that media contacts are not able to respond to customer service queries).
                        <div className="feedback">
                         <p className="fedPara">{feedbacks1}</p>
                         <div className="YesNo">
                         <button className="yesbtn" onClick={()=>feedbackClick1()}>Yes <FaThumbsUp /></button>
                         <button className="yesbtn" onClick={()=>feedbackClick1()}>No <FaThumbsDown /></button>
                         </div>
                        </div>
                     </p>
                    </details>
                    <hr></hr>
                </div>

                <div>
                <details>
                        <summary className="summaryTag">Who do I contact about your Parter Program(APIs)?</summary>
                    <p className="Para">
                        If you are Interested in learning more about our Partner Program, Including our APIs,
                         please visit Rapid APIs Official Website.
                         <div className="feedback">
                         <p className="fedPara">{feedbacks2}</p>
                         <div className="YesNo">
                         <button className="yesbtn" onClick={()=>feedbackClick2()}>Yes <FaThumbsUp /></button>
                         <button className="yesbtn" onClick={()=>feedbackClick2()}>No <FaThumbsDown /></button>
                         </div>
                        </div>
                    </p>
                    </details>
                    <hr></hr>
                </div>

                <div>
                <details>
                        <summary className="summaryTag">Who do I contact about marketing opportunities?</summary>
                    <p className="Para">
                    We are always keen to hear about new marketing opportunities. Please contact us via the contact us link below,  as your contact reason. We look forward to hearing from you.
                    <div className="feedback">
                         <p className="fedPara">{feedbacks3}</p>
                         <div className="YesNo">
                         <button className="yesbtn" onClick={()=>feedbackClick3()}>Yes <FaThumbsUp /></button>
                         <button className="yesbtn" onClick={()=>feedbackClick3()}>No <FaThumbsDown /></button>
                         </div>
                    </div>
                    </p>
                    </details>
                    <hr></hr>
                </div>

                <div>
                <details>
                        <summary className="summaryTag">I want to work for This App?</summary>
                    <p className="Para">
                    That's great news! If you're looking for the adventure of a lifetime, you've come to the right place. We're always keen to find bright, curious, ambitious minds to join us on our mission to change the way the world travels.
                    Check out our Jobs site to see what's available across our many offices worldwide. There you'll find all the info about current roles and what it's like to work at us. You'll also be able to apply directly. 
                    (We should mention that we won't be able to accept any applications made through this Help site.)
                    <div className="feedback">
                         <p className="fedPara">{feedbacks4}</p>
                         <div className="YesNo">
                         <button className="yesbtn" onClick={()=>feedbackClick4()}>Yes <FaThumbsUp /></button>
                         <button className="yesbtn" onClick={()=>feedbackClick4()}>No <FaThumbsDown /></button>
                         </div>
                    </div>                   
                    </p>
                    </details>
                    <hr></hr>
                </div>

                <div>
                <details>
                        <summary className="summaryTag">How to I advrtise with You?</summary>
                    <p className="Para">
                    We have several advertising solutions available, and our advertising team welcome any requests for new business relationships.
                     Please contact us by filling out this form and we will get in touch.
                    Please note that we are unable to enter into reciprocal link exchanges, however all our affiliate offerings can be found here.
                    <div className="feedback">
                         <p className="fedPara">{feedbacks5}</p>
                         <div className="YesNo">
                         <button className="yesbtn" onClick={()=>feedbackClick5()}>Yes <FaThumbsUp /></button>
                         <button className="yesbtn" onClick={()=>feedbackClick5()}>No <FaThumbsDown /></button>
                         </div>
                    </div>
                    </p>
                    </details>
                    <hr></hr>
                </div>

                <div>
                <details>
                        <summary className="summaryTag">How can I stop this App from sending me emails?</summary>
                    <p className="Para">
                    Feeling overwhelmed by your inbox? You can easily unsubscribe using the 'Unsubscribe' link that's at the bottom of all our emails.
                     If you'd still like to get some of our emails, just log in to your  account, 
                     head to the Account area and update your preferences in the Price Alert Management and Subscriptions sections
                     <div className="feedback">
                         <p className="fedPara">{feedbacks6}</p>
                         <div className="YesNo">
                         <button className="yesbtn" onClick={()=>feedbackClick6()}>Yes <FaThumbsUp /></button>
                         <button className="yesbtn" onClick={()=>feedbackClick6()}>No <FaThumbsDown /></button>
                         </div>
                    </div>
                    </p>
                    </details>
                    <hr></hr>
                </div>

                <div>
                <details>
                        <summary className="summaryTag">How do i sign out from this App ?</summary>
                    <p className="Para">
                    If you'd like to know how to sign out of this App, follow these simple steps. 
                     On the desktop and mobile websites, click on your profile icon at the top of any screen. You will then see an option to log out on the menu options on the next page. 
                     <div className="feedback">
                         <p className="fedPara">{feedbacks7}</p>
                         <div className="YesNo">
                         <button className="yesbtn" onClick={()=>feedbackClick7()}>Yes <FaThumbsUp /></button>
                         <button className="yesbtn" onClick={()=>feedbackClick7()}>No <FaThumbsDown /></button>
                         </div>
                    </div>
                    </p>
                    </details>
                    <hr></hr>
                </div>

            </div>

        </div>
        <Subscribe/>
        <Footer/>
        </>
        
    )
}
export default About