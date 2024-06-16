import { MdFlight } from "react-icons/md";
import Footer from "../Components/Footer/footer"
import NavBar from "../Components/NavBar/navBar"
import dubai from "../Media/dubai.jpeg"
import "./destinations.scss"
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { GiWitchFlight } from "react-icons/gi";
import newyork from "../Media/new-york-statue.jpg"
import dubaiImg from "../Media/dubaiImg1.jpg"
import Africa from "../Media/Africa.jpg"
import Ephil from "../Media/ephil.jpg"
import Australia from "../Media/Australia.jpg"
import indiangate from "../Media/Indian-gate.jpg"
import Tajmahal from "../Media/Tajmahal.jpg"
import Japann from "../Media/japanImg.png"
import Rome from "../Media/Rome.jpeg"
import Maldivs from "../Media/Maldivs.jpeg"
import Tokyo from "../Media/Tokyo.jpeg"
import Tahiti from "../Media/Tahiti.jpeg"
import Barsalona from "../Media/Barsalona.jpeg"
import GreatbarierRef from "../Media/Great barrier ref.jpeg"
import Subscribe from "../Components/Subcribers/Subcribe";
import { useEffect } from "react";
import Aos from "aos";

const Destinations=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return(
        <>
        <NavBar/>
        <div className="Container">
           
            <h1 className="heding" data-aos="fade-down" data-aos-duration="1500"><MdFlight/>Top Visited Places Our Customers<MdFlight/></h1>
            <div className="card-grid">
                <span className="Cards" data-aos="fade-down" data-aos-duration="2500">
                    <img className="image" src={Rome} alt="Rome img" height={200} width={200}/>
                    <q>When you visit Italy's capital city <a href="https://travel.usnews.com/Rome_Italy/">Rome,</a> prepare to cross a few must-see landmarks – including the Colosseum,
                         the Trevi Fountain and the Pantheon – off of your bucket list.Travelers can also see some of Italy's 
                             greatest treasures, including St. Peter's Basilica and the Sistine Chapel, in Vatican City.</q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><CiStar /><CiStar /></p>
                    <button className="viewbt">BookNow <MdFlight/></button>
                </span>
                <span className="Cards" data-aos="fade-up" data-aos-duration="2500">
                    <img className="image" src={Maldivs} alt="Maldivs img" height={200} width={200}/>
                    <q>It is not cheap or easy to reach,<a href="https://travel.usnews.com/Maldives/">(Maldivs)</a> but this isolated Indian Ocean vacation spot located southwest of India
                         is the personification of a dreamy tropical retreat. In this remote destination, which is made up of more than 1,000 islands,
                         thatched-roof overwater bungalows sit above the bright aquamarine sea</q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><CiStar /></p>
                    <button className="viewbt">BookNow <MdFlight/></button>
                </span>
                <span className="Cards" data-aos="fade-down" data-aos-duration="2500">
                    <img className="image" src={Tokyo} alt="Tokyo img" height={200} width={200}/>
                    <q>Simply setting foot in Japan's frenetic capital city is an experience. Known for its bustling streets and flashing 
                        neon signs, <a href="https://travel.usnews.com/Tokyo_Japan/">Tokyo</a> has an electric energy and ample top attractions to discover.
                         Foodies won't be let down by Tokyo's fresh sushi and hearty ramen</q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><CiStar /><CiStar /><CiStar /></p>
                    <button className="viewbt">BookNow <MdFlight/></button>
                </span>
                <span className="Cards" data-aos="fade-up" data-aos-duration="2500">
                    <img className="image" src={Tahiti} alt="Tahiti img" height={200} width={200}/>
                    <q>Travel to this island – the largest in French <a href="https://travel.usnews.com/Tahiti_French_Polynesia/">Polynesia</a> – if you've been dreaming of a vacation spent lazing in
                         a lavish overwater bungalow combined with experiencing an ancient culture. Beyond the posh resorts, 
                        Tahiti boasts black sand and golden beaches, a bustling capital (Papeete) </q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><CiStar /><CiStar /></p>
                    <button className="viewbt">BookNow <MdFlight/></button>
                </span>
                <span className="Cards" data-aos="fade-down" data-aos-duration="2500">
                    <img className="image" src={Barsalona} alt="Barsalona img" height={200} width={200}/>
                    <q>This <a href="https://travel.usnews.com/Barcelona_Spain/">Spanish</a> city is a feast for the eyes: Visitors can walk past medieval architecture in the Barri Gòtic,
                         snap photos of the intricate Basílica de la Sagrada Família and marvel at more of Antoni Gaudí's whimsical creations
                         in Park Güell. Meanwhile, Barceloneta beach and the Parc de la Ciutadella</q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><CiStar /><CiStar /><CiStar /></p>
                    <button className="viewbt">BookNow <MdFlight/></button>
                </span>
                <span className="Cards" data-aos="fade-up" data-aos-duration="2500">
                    <img className="image" src={GreatbarierRef} alt="GreatbariarRef img" height={200} width={200}/>
                    <q>The globe's largest coral reef system – and one of the original Seven Natural Wonders of the World – touts 
                        one-of-a-kind scenery. At Australia's <a href="https://travel.usnews.com/Great_Barrier_Reef_Australia/">Great Barrier Reef</a>, you'll find more than 600 islands and 1,500-plus species of fish.
                         Though plenty of diving and snorkeling spots can be found.</q>
                    <p className="star"><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><CiStar /><CiStar /></p>
                    <button className="viewbt">BookNow <MdFlight/></button>
                </span>
                </div>
            {/* Container for Top Nations in Tourisum */}
            <hr/>
                <div className="container1">
            <h1 className="heading" data-aos="fade-down" data-aos-duration="2500"><GiWitchFlight />Top Most Tourisum Developed Countries <GiWitchFlight /></h1>
            <div className="grid-imgs">
                <span className="item1" data-aos="fade-up" data-aos-duration="2500">1
                    <img className="imageG" src={dubaiImg} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere" ,fontSize:"1.5rem"}}>Before oil was discovered in <strong><mark>Dubai</mark></strong> in the late 1960s, the city's main trade was pearl diving. In the early 20th century, there were around 300 dhows working from Dubai Creek, employing more than 7,...
                      Archaeological finds such as spearheads have revealed there were humans in the area that is now Dubai over 100,000 years ago.
                    </q><br/>
                    <button className="viewbt">See-More <MdFlight/></button>
                </span>
                <span className="item2" data-aos="fade-down" data-aos-duration="2500">2

                    <div style={{marginBottom:"5px"}}>
                    <img className="imageG" src={Africa} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.2rem"}}>Located on the southwest tip of <strong><mark>South Africa’s</mark></strong>Western Cape Province,
                         Cape Town is the most popular tourist destination in all of Africa. 
                        The metropolis enjoys a mild, Mediterranean climate, a well-developed infrastructure and a spectacular natural setting. 
                    </q><br/>
                    <button className="viewbt">See-More <MdFlight/></button>
                    </div>
                    {/* ...... */}
                    <div style={{marginTop:"5px"}} className="ExtraCard">
                    <hr/>
                    <img className="imageG" src={dubai} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.2rem"}}><strong><mark>Dubai</mark></strong> is the fourth most visited place in the world and is 
                        famous for its high-rising architectural wonders and excellent collection of resorts and spas.
                    </q><br/>
                    <button className="viewbt">See-More <MdFlight/></button>
                    </div>
                </span>

                <span className="item3" data-aos="fade-up" data-aos-duration="2500">3
                    <img className="imageG" src={Ephil} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.2rem"}}>The Eiffel Tower along the Seine River, <strong><mark>Paris</mark></strong>. 
                        The Eiffel Tower stands on four lattice-girder piers that taper inward and join to form a single large vertical tower.
                        As they curve inward, the piers are connected to each other by networks of girders at two levels that afford viewing platforms for tourists. 
                    </q><br/>
                    <button className="viewbt">See-More <MdFlight/></button>
                </span>

                <span className="item4" data-aos="fade-down" data-aos-duration="2500">4
                    <img className="imageG" src={indiangate} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.2rem"}}> India Gate is a historical monument situatedin the capital of <strong><mark>India</mark></strong>,
                         New Delhi. It was built to pay homage to the soldierswho fought bravely during World War I.
                    </q><br/>
                    <button className="viewbt">See-More <MdFlight/></button>
                </span>
                <span className="item5" data-aos="fade-up" data-aos-duration="2500">5
                    <img className="imageG" src={Australia} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.2rem"}}>This is a famous establishment that becomes iconic for <strong><mark>Australia.</mark></strong>
                         Whenever the name of the country is uttered anywhere on the globe, people get the vision of the Opera House at least once
                          in their mind.
                     </q><br/>
                     <button className="viewbt">See-More <MdFlight/></button>
                </span>

                <span className="item6" data-aos="fade-down" data-aos-duration="2500">6
                    <div>
                    <img className="imageG" src={newyork} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere", fontSize:"1.2rem"}}>The city of <strong><mark>New-York</mark></strong> has been the setting for thousands of films and
                         television series over the years, which has drawn fans from all around the world as a result. 
                    </q><br/>
                    <button className="viewbt">See-More <MdFlight/></button>
                    </div>
                    {/* ...... */}
                    <div style={{marginTop:"5px"}} className="ExtraCard">
                    <hr style={{color:"black" }} />
                    <img className="imageG" src={Japann} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.2rem"}}>If you have the body to control cold and won’t be the victims of frostbites, then winter in japan is a good call to make.
                         It is a perfect time of the year for those who are planning to ski in <strong><mark>Japan</mark></strong>.
                    </q><br/>
                    <button className="viewbt">See-More <MdFlight/></button>
                    </div>

                </span>

                <span className="item7" data-aos="fade-up" data-aos-duration="2500">7  
                    <img className="imageG" src={Tajmahal} alt="dubai"></img>
                    <q style={{lineBreak:"anywhere",fontSize:"1.5rem"}}>In <strong><mark>India</mark></strong> Rabindranath Tagore described the Taj Mahal, Agra as “a tear on the cheek of immortality”,
                         Rudyard Kipling as “personification of all immaculate”, and its creator, Emperor Shah Jahan, said that “the sun and the moon did tears
                          fall from the eyes “. Every year, tourists with twice the population of Agra, pass through the city gates at least once in their lifetime to
                           see the building, aptly named by many of the most beautiful in the world. Few leave disappointed.
                           This is truly a monument, beautiful in all seasons. There are those who really love the view of the Taj Mahal in Sharad Purnima, the first full moon after the monsoons,
                            on a cloudless evening in October, when the light is the clearest and most romantic. 
                    </q><br/>
                    <button className="viewbt" onClick={""}> See-More <MdFlight/></button>
                </span>

            </div>
            </div>
        </div>
        <Subscribe/>
        <Footer/>
        </>
    )
}
export default Destinations