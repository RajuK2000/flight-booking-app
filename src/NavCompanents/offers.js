import { BiSolidOffer } from "react-icons/bi"
import Footer from "../Components/Footer/footer"
import NavBar from "../Components/NavBar/navBar"
import offerFlight from "../Media/OffImg.jpg"
import "./offers.scss"
import { BsBank } from "react-icons/bs"
import { PiAirplaneInFlightFill } from "react-icons/pi"
import { MdHolidayVillage } from "react-icons/md"
import { FaAngleDoubleUp, FaCcPaypal, FaFireAlt } from "react-icons/fa"
import { useState } from "react"
import firstOffer from "../Media/OffersPageImg/1stBooking.png"
import Wcl from "../Media/OffersPageImg/WCL.png"
import freecab from "../Media/OffersPageImg/free-cab-lp3.png"
import busoffer from "../Media/OffersPageImg/emtbus-28apr-sm.png"
import Hoteldeal from "../Media/OffersPageImg/hotel-deal-for-flyers-sm.png"
import NewJourny from "../Media/OffersPageImg/tripemt-sm.png"
import Bank from "../Media/OffersPageImg/Banks.png"
import Cancel from "../Media/OffersPageImg/cancel.png"

import Kotak from "../Media/OffersPageImg/kotak-14june-sm.png"
import ICICI from "../Media/OffersPageImg/ICICI.png"
import Aubank from "../Media/OffersPageImg/AuBank.png"
import SCBbank from "../Media/OffersPageImg/SCB bank.png"
import BOIbank from "../Media/OffersPageImg/BOI bank.png"
import Canara from "../Media/OffersPageImg/canara-bank.png"
import PNB from "../Media/OffersPageImg/pnb.png"
import DigiBnak from "../Media/OffersPageImg/digibank-sm.png" 
// import { useNavigate } from "react-router-dom"

import Mobikwick from "../Media/OffersPageImg/mobiKwik-30apr24-sm.png"
import Phonepay from "../Media/OffersPageImg/phonepay.jpg"
import UPI from "../Media/OffersPageImg/UPI.jpg"
import Paytm from "../Media/OffersPageImg/paytm.png"

import Us from "../Media/OffersPageImg/united States.png"
import BusinesClass from "../Media/OffersPageImg/business-class-sm.png"
import AirIndia from "../Media/OffersPageImg/air-india-flight.png"
import Indigo from "../Media/OffersPageImg/indigo.png"
import FlyFam from "../Media/OffersPageImg/flyfamily-6jan22-sm.png"
import Thailand from "../Media/OffersPageImg/thailand-flight-sm.png"
import Philiphins from "../Media/OffersPageImg/philippines-flight-sm.png"
import USA from "../Media/OffersPageImg/usa-flight-sm.png"
import Banglladesh from "../Media/OffersPageImg/bangladesh-flight-sm.png"
import AirFrance from "../Media/OffersPageImg/air-france-14feb24-sm.png"

import kerala from "../Media/OffersPageImg/kerala.jpg"
import Bali from "../Media/OffersPageImg/Bali.jpg"
import Honkong from "../Media/OffersPageImg/Singapore.jpg"
import canada from "../Media/OffersPageImg/canada.jpg"
import singapore from "../Media/OffersPageImg/sing.jpg"
import zealand from "../Media/OffersPageImg/Zealand.jpg"

import elernMarket  from "../Media/OffersPageImg/elearnmarkets-sm.png"
import Stackedge from "../Media/OffersPageImg/stockedge-sm.png"
import Asco from "../Media/OffersPageImg/acko-sm2.png"
import { Link } from "react-router-dom"

const Offers=()=>{
    const [active,setactive] = useState("")
    const [pos,setpos]=useState("")
    const [arrow,setarrow]=useState("")
    // const navigate=useNavigate("")
         console.log("Offers Page..")

   const navigatetoTop=()=>{
    if(window.scrollY <= 20){
      setpos("sticky")
      setarrow("arrowS")
    }else{
     setpos("UseSticky")
     setarrow("")
    }
   }
   window.addEventListener("scroll",navigatetoTop)

    const handleclick=(data)=>{
        // navigate(`${data}`)
       return setactive(data)
    }

    const poistion=(event)=>{
        event.preventDefault()  
    }

    return(
        <>
        <NavBar/>
        <div className="Mcontainer">
        <img src={offerFlight} alt="offerimg" className="image" id="main"/>
            <div className="subContainer">
               <ul className="Bar">
                <li className="list" onClick={()=>handleclick("SpecialOffers")}><BiSolidOffer className="icon"/>Special Offers</li>
                <li className="list" onClick={()=>handleclick("BankOffers")}><BsBank className="icon"/> Bank Offers</li>
                <li className="list" onClick={()=>handleclick("Payment Apps")}><FaCcPaypal className="icon"/> Payment Apps</li>
                <li className="list" onClick={()=>handleclick("Flight Offers")}><PiAirplaneInFlightFill className="icon"/> Flight Offers</li>
                <li className="list" onClick={()=>handleclick("Holiday Offers")}><MdHolidayVillage className="icon"/> Holiday Offers</li>
                <li className="list" onClick={()=>handleclick("Hot Deals")}><FaFireAlt className="icon"/> Hot Deals</li>
               </ul>
            </div>
            <div className={pos}>
                <Link to="#" className="navigateBtn" onClick={()=>poistion()}><FaAngleDoubleUp className={arrow}/></Link>
            </div>

         <h1>{active}</h1>

            <h1 style={{textAlign:"center", padding:"10px"}}>Special Deals</h1>
            <div id="SpecialOffers">

            <div className="cards">
               <img src={firstOffer} alt="1stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>New User Offer</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Register and Get Discount on first Booking with Using This App</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th June,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>EMTFIRST</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Wcl} alt="2stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>WCL Match Tickets</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Get up to INR 5,000 OFF on UK flights and 10% On WCL match tickes</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 31th Jul,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>WCLEMT</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={freecab} alt="3stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Free Cab Offer</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Enjoy Free Cab on Flight Bookings with This App</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th June,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>FREECAB</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={busoffer} alt="4stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Bus Deal</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Bus Tickets to Different Destinations At A Discount Up to Rs.500</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 15th Jul,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>EMTBUS</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Hoteldeal} alt="5thOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Flyers Deal</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Flat 30% off on Hotel Booking for Flyers</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th June,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>EMTFLY</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={NewJourny} alt="6thOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Special Discount</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Get Irresistible Discount on Flight, Hoteland Bus Booking with Our App</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 15th Aug,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>TRIPEMT</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Bank} alt="7thOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Standard Chartered Bank</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Book Travel and Save using standard Chartered Bank Cards</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th July,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>EMTSTANC</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Cancel} alt="8thOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Free Flight Cancellation Coverage</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Get complimentary flight Cancellation insurence on every flight booking</p>
            </div>
            </div>

            <h1 style={{textAlign:"center", padding:"10px"}}>Bank Offers</h1>
            <div id="BankOffers">

            <div className="cards">
               <img src={Kotak} alt="1stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Kotak Bank Credit Card</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Enjoy No Cost EMI on Flight & Hotel Booking with Kotak Bank Credit Card</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 31th July,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>KOTAKEMI</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={ICICI} alt="2stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>ICICI Bank Credit Cards</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Save Huge on Booking Flight, Hotel using ICICI Bank Credit Cards</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th Jun,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>ICICIRNT</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Aubank} alt="3stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>AU Credit Card</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Enjoy Exclusive Travel Discounts with AU Credit Card</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 25th July,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>RNTAU</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={SCBbank} alt="4stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Standard Chartered Bank</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Book Travel and Save using Standard Chartered Bank Cards</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th July,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>RRTSTANC</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={BOIbank} alt="5thOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Bank Of Baroda Offer</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Make Budget Friendly Trips with Bank of Baroda Debit Card</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th June,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>BOBDC</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Canara} alt="6thOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Canara Bank Credit Card</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Plan your summer Break with Canara Bank Credit Card Offer</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 15th july,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>TRIPEMT</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={PNB} alt="7thOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>PNB EMT Credit Card</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Wander the world with wonderful Deals with PNB EMT Credit Card</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th Dec,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>PNBEMT</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={DigiBnak} alt="8thOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Save huge using digibank</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Applay for digibank saving account and save huge on travel</p>
               <div className="Promocode">
               
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>DBSEMT</h5>
                    </fieldset>  
                
               </div>
            </div>

            </div>

            <h1 style={{textAlign:"center", padding:"10px"}}>UPI Offers</h1>
            <div id="PaymentApps">

            <div className="cards">
               <img src={Mobikwick} alt="1stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>MObiKwik UPI offer</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Make Your Travel Bookings with MobiKwik UPI and Enjoy Cashback</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 31th July,2024</small>
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Phonepay} alt="2stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>PhonePe UPI Offer</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Win Up to INR 600 Cashback* on Travel Bookings with PhonePe UPI</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 29th Jun,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>EMTPP</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={UPI} alt="3stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>UPI Offer</p>
               <p style={{fontSize:"16px", padding:"5px"}}>You can use any UPI App get plat 1,100 off only once per a your</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 26th July,2024</small>
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Paytm} alt="4stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Paytm UPI Offer</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Paytm New user get upto 10,000 Cashback* book a flight ticket using Paytm UPI</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 12th July,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>PYTMRR</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            
            </div>

            <h1 style={{textAlign:"center", padding:"10px"}}>Flight Offers</h1>
            <div id="Flights-Offers">

           <div className="cards">
   <img src={Us} alt="1stOffers" className="images"/>
   <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>United Airline Flight</p>
   <p style={{fontSize:"16px", padding:"5px"}}>Enjoy Non-stop Flights from Delhi to NewYork/Newark explore more than 270 destinations</p>
   <div className="Promocode">
    <div>
    <h3>Booking Periode</h3>
    <small>Valid till : 31th July,2024</small>
    </div>
    <p style={{fontWeight:"700", fontSize:"16px",cursor:"pointer"}}>BookNow</p>
   </div>
           </div>

           <div className="cards">
   <img src={BusinesClass} alt="2stOffers" className="images"/>
   <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Star Air Flights Offers</p>
   <p style={{fontSize:"16px", padding:"5px"}}>Enjoy Business Class Fares on Booking Star Air Flights</p>
   <div className="Promocode">
    <div>
    <h3>Booking Periode</h3>
    <small>Valid till : 30th Sep,2024</small>
    </div>
   </div>
           </div>

           <div className="cards">
   <img src={AirIndia} alt="3stOffers" className="images"/>
   <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Air India Flight</p>
   <p style={{fontSize:"16px", padding:"5px"}}>Explore Direct Flights Between Delhi and Zurich</p>
   <div className="Promocode">
    <div>
    <p style={{fontWeight:"700", fontSize:"16px",cursor:"pointer"}}>BookNow</p>
    </div>
   </div>
           </div>

            <div className="cards">
   <img src={Indigo} alt="4stOffers" className="images"/>
   <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>IndiGo Airlines Flight</p>
   <p style={{fontSize:"16px", padding:"5px"}}>Enjoy Flights from India to Australia via Singapore Twice Daily* With IndiGo Airline</p>
   <div className="Promocode">
    <div>
    <p style={{fontWeight:"700", fontSize:"16px",cursor:"pointer"}}>BookNow</p>
    </div>
   </div>
            </div>

           <div className="cards">
               <img src={FlyFam} alt="5stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Fly Family</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Enjoy Up to Rs.3000 off Booking FLight Tickets For Three Persons</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th June,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>FLYFAMILY</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Thailand} alt="6stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Fly to Thailand</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Enjoy up to INR 10000* Discount on Booking the Thailand Flights</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 15th July,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>EMTHAILAND</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Philiphins} alt="7stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Fly Philippines</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Book Your Flight to Philippines with Us & Grab Upto INR 10000* Discount</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th June,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>PHILIPSER</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={USA} alt="8stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Fly to United States</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Explore up to INR 10000* Discount on Booking the United States Flights</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 19th June,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>EMTUSA</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Banglladesh} alt="9thOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Fly to Bangladesh</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Enjoy Up to INR 10000 Discount on Flights to Bangladesh</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th June,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>EMTFLYBANGLA</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={AirFrance} alt="10thOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Air France,KLM Royal Dutch & Delta Airline Offer</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Unlock Your Special Fares on Flight Booking to Explore the World</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 31th June,2024</small>
                </div>
               </div>
            </div>


            </div>
            
            <h1 style={{textAlign:"center", padding:"10px"}}>Holiday Offers</h1>
            <div id="HolidayOffers">

            <div className="cards">
               <img src={kerala} alt="1stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Keral Special</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Witness the Beauty of Gods own Country</p>
               <div className="Promocode">
                <div>
                </div>
                <div>
                <p style={{fontWeight:"700", fontSize:"16px",cursor:"pointer"}}>BookNow</p>
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Bali} alt="2stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Serene Bali</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Bali Island is well known as an island of the god</p>
               <div className="Promocode">
                <div>

                </div>
                <div>
                <p style={{fontWeight:"700", fontSize:"16px",cursor:"pointer"}}>BookNow</p>
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Honkong} alt="3stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Stunning Hong Kong</p>
               <p style={{fontSize:"16px", padding:"5px"}}>This Stunning urban city of Hong Kong appeals the travelers from all over the world</p>
               <div className="Promocode">
                <div>

                </div>
                <p style={{fontWeight:"700", fontSize:"16px",cursor:"pointer"}}>BookNow</p>
               </div>
            </div>

            <div className="cards">
               <img src={canada} alt="4stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Captivating Canada</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Explore the natural beauty of the city through its parks,gardens,beaches, and centers</p>
               <div className="Promocode">
                <div>
                </div>
                <div>
                <p style={{fontWeight:"700", fontSize:"16px",cursor:"pointer"}}>BookNow</p> 
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={singapore} alt="5stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Singapore + RCL Cruise</p>
               <p style={{fontSize:"16px", padding:"5px"}}>It's a place where distict cultures live together cordially</p>
               <div className="Promocode">
                <div>

                </div>
                <p style={{fontWeight:"700", fontSize:"16px",cursor:"pointer"}}>BookNow</p>
               </div>
            </div>

            <div className="cards">
               <img src={zealand} alt="4stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>Mesmerizing New Zealand</p>
               <p style={{fontSize:"16px", padding:"5px"}}>New Zealand appeals the tourist with its panoramic landscape viewa,vivid festivals</p>
               <div className="Promocode">
                <div>
                </div>
                <div>
                <p style={{fontWeight:"700", fontSize:"16px",cursor:"pointer"}}>BookNow</p> 
                </div>
               </div>
            </div>

            
            </div>

            <h1 style={{textAlign:"center", padding:"10px"}}>Hot Deals</h1>
            <div id="HotDeals">

            <div className="cards">
               <img src={elernMarket} alt="1stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>ElearnMarkets offer</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Enjoy 100% OFF* On optins Tradding Made Easy With Elearnmarket</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 31th Dec,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>RAJ100</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Stackedge} alt="2stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>StockEdge offer</p>
               <p style={{fontSize:"16px", padding:"5px"}}>Enjoy 100% Off on StockEdge Premium Montly Subscription</p>
               <div className="Promocode">
                <div>
                <h3>Booking Periode</h3>
                <small>Valid till : 30th Dec,2024</small>
                </div>
                <div>
                    <fieldset style={{borderStyle:"dotted", padding:"4px 15px", borderRadius:"8px"}}>
                        <legend>Code:</legend>
                        <h5>RAJSE100</h5>
                    </fieldset>  
                </div>
               </div>
            </div>

            <div className="cards">
               <img src={Asco} alt="3stOffers" className="images"/>
               <p style={{fontWeight:"700", fontSize:"22px", padding:"2px"}}>ACKO General Insurance</p>
               <p style={{fontSize:"16px", padding:"5px"}}>2-minutes insureance for your 2-wheeler.Zerocommision</p>
               <div className="Promocode">
                <p style={{fontSize:"16px", padding:"5px"}}>IRDAI Reg.No 157 | UID: 4180 | UIN: IRDANI57RP0002V01201819</p>
               </div>
            </div>
  
            </div>
      
        </div>
        <Footer/>
        </>
    )
}
export default Offers