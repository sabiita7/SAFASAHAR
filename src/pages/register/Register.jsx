
import React from 'react'
import './register.css'

const Register = () => {
  return (
    <r>
    <div className="box1">
        <form action="">
            <h2>Register</h2>
            <div className="inputBox">
                <input type="text"  name="name"  autoComplte="off" required/>
                <span>Name</span>
                <i></i>

            </div>
            <div className="inputBox">
                <input type="text"  name="address" autoComplte="off" required/>
                <span>Address</span>
                <i></i>

            </div>
            <div className="inputBox">
                <input type="text" name="phonenumber"autoComplte="off" required />
                <span>Phone Number</span>
                <i></i>

            </div>
            <div className="inputBox">
                <input type="text"  name="email" autoComplte="off" required/>
                <span>Email</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" name="password" autoComplte="off" required />
                <span>Password</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" name="cpassword"  autoComplte="off" required/>
                <span>Confirm Password</span>
                <i></i>
                
            </div>
             <div>
                 <input type="radio" id="nagarik" name="user" value="nagarik" required />
                 <label htmlFor="nagarik">Nagarik</label>

                <input type="radio" id="g_collector" name="user" value="g_collector" required />
                <label htmlFor="g_collector">G-collector</label>
                <input type="radio" id="safa_ghar" name="user" value="safa_ghar"required />
                <label htmlFor="safa_ghar">Safa Ghar</label>

            </div>
            <input type="submit" value="Register" className="register-button"/>
            </form>

    </div>
</r>
  )
}

export default Register
