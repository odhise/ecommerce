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

            <div className="img-container">
                <div className="img-contents">
                    <div>
 <h2>WELCOME TO</h2>
 </div>
 <div>
 <h3>Magoso Enterprises.</h3>
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
          <div className="products">
             
    <input type="text" placeholder=""  className="Email"/>
    <lebel className="label">Email</lebel>

   
        </div>
    <div className="visibility">
        <div>

    <input type={showPass ? "text":"password"} placeholder=""  className="password" />
    <label className="label-word">Password</label>


    </div>
    <div  className="icon" onClick={togglePassWordVisibility}>
  {showPass ?  < VisibilityOutlinedIcon />:< VisibilityOffIcon  />
   }

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