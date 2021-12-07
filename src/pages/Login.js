import React, { useState } from "react";
import "./Login.css";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


const Login=()=>{
   const [showPass , setShowPass]=useState(false);
   const togglePassWordVisibility=()=>{
       setShowPass(!showPass)
   }
    return(
        <div className="login-container">

            <div className="img-container2">
                <div className="img-contents">
                    <div>
 <h3>WELCOME TO</h3>
 </div>
 <div>
 <h2>Magoso Enterprises.</h2>
 </div>
 <div>
 <p>The home of Reliable Shopping</p>
 </div>
 </div>
          </div> 
            <div>
            <div>
            <h5>Magoso Enterprise</h5>
            </div>
            <div>
            <h1>LOGIN</h1>
            </div>
            <div className="inputs">
          <div className="products input-container">
             
    <input type="text" placeholder="Email"  className="email input"/>
    <div className="input-border"></div>
    <label className="label-input">Email</label>

        </div>

<div className="password-input">
    <div className="visibility">
        <div className="input-container">

    <input type={showPass ? "text":"password"}  placeholder="Password"  className="password input" />
    <div className="input-border"></div>
    <label className="label-input">Password</label>


    </div>
    <div  className="icon" onClick={togglePassWordVisibility}>
  {showPass ?  < VisibilityOutlinedIcon />:< VisibilityOffIcon  />
   }

   </div>
   </div>
   
   </div>
   
   </div>
   <div>
   <button className="btn">Login</button>
   </div>
   <div className="check">
       <div className="value">
       <div>
   <input type="checkbox"  value="checkbox" />
   </div>
   <div>
   <p>Remember me</p>
   </div>
   </div>
   <div>
   <p>Forgot your Password?</p>
   </div>
   </div>
   <div className="Account">
   <div>
   <p>New to Magoso Enterprises?</p>
   </div>
   <div>
   <input type="text" placeholder="Create Account" />
   </div>
   </div>

   <p  className="copy">Magoso Enterprises &copy;2021</p>

   </div>

    
        </div>
        

    )
}




export default Login