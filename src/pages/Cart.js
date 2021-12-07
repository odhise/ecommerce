import React ,{useState}from "react"
import ClearIcon  from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveIcon  from '@mui/icons-material/RemoveOutlined';
import AddIcon from '@mui/icons-material/AddOutlined';
import  "./Cart.css"
import Footer from "../components/Footer/Footer";



const Cart=()=>{

    
const [Number,setNumber]=useState(0);
const increase=()=>{
    if(Number<25){
    setNumber(prevNumber=>prevNumber +1);}
    

};
const decrease=()=>{
    if(Number>1){
    setNumber(prevNumber=>prevNumber -1);}
} ;
    return(
        <>
        <div className="all-flex">
            <div>
            <div>
            <div>
                <h2>Your Cart</h2>
            </div>
            <div className="all-parts">
                <div className="flex">
            <div>
            <div className="img-fluid">
                <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"/>
            </div>
            </div>
            <div>
            <div className="product1">
            <div className="part-icon">
                <p>Mens Jake guitar Vintage Crusher</p>
              <p className="clear">  <ClearIcon  />1</p><span className="quantity">Ksh.3,000</span>
            </div>
            <div >
     </div>
            </div>
            <div className="icon-part">
            <div className="west-text">
     <p className="border"></p>
     <RemoveIcon  onClick={decrease} />
     <p className="count">{Number}</p>
     <AddIcon  onClick={increase} />
     </div>
     <div className="remove">
         <DeleteOutlineOutlinedIcon style={{color:"red"}}/><span className="warning">Remove</span>
     </div>
     </div>
     </div>
     </div>
     </div>
     </div>
     <hr  /> 
     <div>
            
            <div className="all-parts">
                <div className="flex">
            <div>
            <div className="img-fluid">
                <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
            </div>
            </div>
            <div>
            <div className="product1">
            <div className="part-icon">
                <p>Mens Jake guitar Vintage Crusher</p>
              <p className="clear">  <ClearIcon  />1</p><span className="quantity">Ksh.3,000</span>
            </div>
            <div >
     </div>
            </div>
            <div className="icon-part">
            <div className="west-text">
     <p className="border2"></p>
     <RemoveIcon onClick={decrease} />
     <p className="count">{Number}</p>
     <AddIcon onClick={increase}/>
     </div>
     <div className="remove">
         <DeleteOutlineOutlinedIcon style={{color:"red"}}/><span className="warning">Remove</span>
     </div>
     </div>
     <div className="access">
     <button className="btn-shop">CONTINUE SHOPPING</button>
     </div>
     </div>
     </div>
     </div>
     </div>
     </div>
     <div className="fill-part">
     <h3 className="order">Your Order</h3>
     <p className="para-span">Subtotal<span className="prize-span" >Ksh 4,000</span></p>
     <p className="para-span">Discount<span className="disc1">-</span></p>
     <p className="para-span">Shipping<span className="shipping">-</span></p>
     <hr />
     <p className="para-span">Totals<span className="prize-span">Ksh 4,000</span></p>
     <button className="checkout">CHECKOUT</button>
     </div>
     </div>
     </>



    )
}







export default Cart