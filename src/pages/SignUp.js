import React, { useState } from "react";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import "./SignUp.css";


const SignUp=()=>{

    const [Password, setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    function onchangePassword(e){
        const enterPassword=e.target.value;
        setPassword(enterPassword)

    }

    function onClickPassword(e){
        const putPassword=e.target.value;
        setConfirmPassword(putPassword)
    }

    const renderIcon=()=>{
        if(confirmPassword!==""){
            return Password===confirmPassword ? < CheckOutlinedIcon style={{color:"green"}}/>:<ClearOutlinedIcon style={{color:"red"}} />
        }
    }


    return(
        <div className="signup-content">
            <h2>Sign-Up</h2>
            <div>
            <label>First Name:</label>
            <input type="text" placeholder="First Name" />
            </div>
            <div>
            <label>Last Name:</label>
            <input type="text" placeholder="Last Name" />
            </div>
            <div>
            <label>E-mail:</label>
            <input type="text" placeholder=" Your E-mail" />
            </div>
            <div>
            <label>Password:</label>
            <input onChange={onchangePassword}type="text" type="password"  placeholder="Passsword" />
            </div>

            <div>
                {renderIcon()}
                </div>

            <div>
            <label>Confirm Password:</label>
            <input onChange={onClickPassword} type="text" type="password" placeholder="Confirm Password" />
            </div>
            <div className="terms">
                <div>
            <input type="checkbox"  value="checkbox"  />
            </div>
            <div>
            <p>I read and agree to Terms and Conditions</p>
            </div>
            </div>
            <div >
            <button className="create">Create Account</button>
            </div>
            <div className="sign-in">
                <div>
            <p>Already have an Account?</p>
            </div>
            <div>
            <button className="get"><a href="#" >Sign in</a></button>
            </div>
            </div>


        </div>
    )
}














export default SignUp