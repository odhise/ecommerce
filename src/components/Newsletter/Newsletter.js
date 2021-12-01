import React from "react";
import "./Newsletter.css"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Newsletter=()=>{
    return(
        <div className="text-content">
                <div>
<h1>Newsletter</h1>
</div>
<div>
<p>Sign up for our newsletter to be notified on new promotion and sales</p>
</div>
<div className="text-input">
<input type="text"  placeholder="Enter email address"  />
<button><SendOutlinedIcon /></button>

</div>

        </div>
    )
}









export default Newsletter