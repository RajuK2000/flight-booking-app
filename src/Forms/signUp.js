
import "./signUp.scss"

const Singup=()=>{
    return( 
        <div className="main">
        <h1>Sign-Up</h1>

        <div className="mainField">

        <div className="field">
        <label for="firstName">FirstName: </label>
        <input type="text" id="firstName" ></input>
        <label for="lastName">LastName: </label>
        <input type="text" id="lastName"></input>
        </div>

        <div className="field">
        <label for="email">Email: </label>
        <input type="email" id="email"></input>
        <label for="mobile">Mobile: </label>
        <input type="tel" id="mobile"></input>
        </div>

        <div className="field">
        <label for="pass">Password: </label>
        <input type="password" id="pass"></input>
        <label for="Cpass">Cpassword: </label>
        <input type="password" id="Cpass"></input>
        </div>

        <button className="btns">Submit</button>
        </div>
        </div>
    )
}
export default Singup