import React from "react"
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



const Footer=()=>{
    return(
        <>
        <div className="footer-container">
            <div className="Enterprise">
            <h1>Magoso Enterprises.</h1>
            <p>Buy the best from the best.We bring you quality products and remarkable customer experiences.We value you</p>
<div className="icon-footer">
<div className="facebook">
        <a href="#"><FacebookIcon /> </a>
           </div>
           <div className="instagram">
          <a href="#"> <InstagramIcon /> </a>
           </div>
           <div className="pinterest">
         <a href="#"> < PinterestIcon /> </a>
          </div>
          <div className="twitter">
         <a href="#"> < TwitterIcon /> </a>
          </div>
          </div>
          </div>


<div className="location-link">
    
    <h1>Useful Links</h1>
    <ul>
        <li>Home</li>
        <li>Man Fashion</li>
        <li>Accessories</li>
        <li>Order Tracking</li>
        <li>Wishlist</li>
        </ul>
        </div>

        <div className="cart">
            <ul>
        <li>Cart</li>
        <li>Women Fashion</li>
        <li>Accessories</li>
        <li>My Account</li>
        <li>Terms</li>
        </ul>

        </div>

<div className="contact-point">
    <div>
    <h3>Contact</h3>
    </div>
<div>
<LocationOnIcon />
<p>Great Street,Lavington,Nairobi.Ke.</p>
</div>

<div>
<CallIcon />
<p> +254 123 456 789</p>
</div>
       <div>
       <MailOutlineIcon />
       <p>Order@magoso.com</p>
       </div>


<div className="content-payment">
    <div className="payment-icon">
        <img src="images/M-PESA_LOGO-01.svg.png"  />
    </div>
    <div className="payment-icon">
        <img src="images/master-card.svg" />
    </div>
    <div className="payment-icon">
        <img src="images/visa.svg" />
    </div>

</div>
</div>


        </div>
        <div className="bottom-link">
          <a> Magoso Enterprises &copy;2021-All Right Reverved</a>
           </div>
        </>
     
    )
}











export default Footer