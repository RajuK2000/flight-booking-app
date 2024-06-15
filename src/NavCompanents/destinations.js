import { MdFlight } from "react-icons/md";
import Footer from "../Components/Footer/footer"
import NavBar from "../Components/NavBar/navBar"
import dubai from "../Media/dubai.jpeg"
import "./destinations.scss"
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";

const Destinations=()=>{
    return(
        <>
        <NavBar/>
        <div className="Container">
           
            <h1 className="heding"><TiStarFullOutline />Top Visited Places our custumers<TiStarFullOutline /></h1>
            <div className="card-grid">
                <span className="Cards">
                    <img className="image" src={dubai} alt="dubai img" height={200} width={200}/>
                    <q>It is used to find the best Experience with Us</q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><CiStar /><CiStar /></p>
                    <button className="viewbt">View More</button>
                </span>
                <span className="Cards">
                    <img className="image" src={dubai} alt="dubai img" height={200} width={200}/>
                    <q>It is used to find the best Experience with Us</q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><CiStar /></p>
                    <button className="viewbt">View More</button>
                </span>
                <span className="Cards">
                    <img className="image" src={dubai} alt="dubai img" height={200} width={200}/>
                    <q>It is used to find the best Experience with Us</q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><CiStar /><CiStar /><CiStar /></p>
                    <button className="viewbt">View More</button>
                </span>
                <span className="Cards">
                    <img className="image" src={dubai} alt="dubai img" height={200} width={200}/>
                    <q>It is used to find the best Experience with Us</q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><CiStar /><CiStar /></p>
                    <button className="viewbt">View More</button>
                </span>
                <span className="Cards">
                    <img className="image" src={dubai} alt="dubai img" height={200} width={200}/>
                    <q>It is used to find the best Experience with Us</q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><CiStar /><CiStar /><CiStar /></p>
                    <button className="viewbt">View More</button>
                </span>
                <span className="Cards">
                    <img className="image" src={dubai} alt="dubai img" height={200} width={200}/>
                    <q>It is used to find the best Experience with Us</q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><CiStar /><CiStar /></p>
                    <button className="viewbt">View More</button>
                </span>
                </div>
                <div className="container1">
            <h1>Top most Tourisum developed Countries</h1>
            <div className="grid-imgs">
                <span className="item1">1
                    <img src={dubai} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere" ,fontSize:"1.5rem"}}>Dubai.It is a famous country for wistors daily 
                        thousands of people are visited this country
                    </q><br/>
                    <button className="viewbt">BookNow <MdFlight/></button>
                </span>
                <span className="item2">2
                    <img src={dubai} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.2rem"}}>It a Uniq place Africa it entire world is separate 
                        to in this in is country lot of people are tribals
                    </q>
                    <button className="viewbt">BookNow <MdFlight/></button>
                </span>
                <span className="item3">3
                    <img src={dubai} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.2rem"}}>France is a one of the famous tourist country in this 
                        Iphil tour is very Famuse to the world 
                    </q><br/>
                    <button className="viewbt">BookNow <MdFlight/></button>
                </span>
                <span className="item4">4
                    <img src={dubai} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.2rem"}}> India is a very beautiful country and follws the ancent culture 
                        and diffent temple and architecure is very good in temples
                    </q>
                    <button className="viewbt">BookNow <MdFlight/></button>
                </span>
                <span className="item5">5
                    <img src={dubai} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.2rem"}}>Australia is also one of the famouse country
                        in this special is kangaroos only in Australia we seen
                     </q><br/>
                     <button className="viewbt">BookNow <MdFlight/></button>
                </span>
                <span className="item6">6
                    <img src={dubai} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere", fontSize:"1.2rem"}}>This is a America most of the people go for this country for education or 
                        do a jobs that is basic beauty this country.
                    </q><br/>
                    <button className="viewbt">BookNow <MdFlight/></button>
                    
                </span>
                <span className="item7" >7
                    <img src={dubai} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.5rem"}}>This is a America most of the people go for this country for education or 
                        do a jobs that is basic beauty this country.
                    </q><br/>
                    <button className="viewbt">BookNow <MdFlight/></button>
                </span>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Destinations