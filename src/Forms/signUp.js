
import "./signUp.scss"
import flight from "../Media/flight.png"

const Singup=()=>{
    return(
        <div className="MainM">
        <div className="main">
        <h1 style={{color:"darkgoldenrod"}}>Sign-Up</h1>

        <div className="mainField">

        <div className="field">
        <label for="firstName" className="sty">FirstName: </label>
        <input type="text" id="firstName" ></input>
        <label for="lastName" className="sty">LastName: </label>
        <input type="text" id="lastName"></input>
        
        </div>

        <div className="field">
        <label for="email" className="sty">Email: </label>
        <input type="email" id="email"></input>
        <label for="mobile" className="sty">Mobile: </label>
        <input type="tel" id="mobile"></input>
        </div>

        <div className="field">
        
        <label for="pass" className="sty">Password: </label>
        <input type="password" id="pass"></input>
        <label for="Cpass" className="sty">Cpassword: </label>
        <input type="password" id="Cpass"></input>
        </div>

        <button className="btns">Submit</button>
        <pre>You have Already an Account! Pleace <a href="./LogIn.js">LogIn</a></pre>
        </div>
        </div>
        </div> 
    )
}
export default Singup