import React from "react"
import "./Nav.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Nav=()=>{
    return(
<div className="Nav-wrapper">
<div className="span">
    <span className="language">EN</span>

<div className="search-container">

<input className="input" type="text" placeholder="search"></input>
< SearchOutlinedIcon />
</div>

</div>
<div className="left">
    <h1 className="prise">MAGOSO ENTERPRISE.</h1>
</div>
<div className="right ">
    
    <ul className="list">
        <div>
        <li> <a href="#">LOGIN </a></li>
        </div>
        <div>

       <li> <a href="#">Register</a></li>
        </div>

        <div>
    <Badge badgeContent={4} color="secondary">
        <LocalMallOutlinedIcon color="action" />
      </Badge>
      </div>
    </ul>
  
      

</div>
</div>

    )
}

export default Nav