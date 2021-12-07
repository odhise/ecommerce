import React, { useState } from "react"
import "./SingleProductPage.css"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const SingleProductPage=()=>{
    
const [Number,setNumber]=useState(0);
const increase=()=>{
    if(Number<100){
    setNumber(prevNumber=>prevNumber +1);}
    

};
const decrease=()=>{
    if(Number>1){
    setNumber(prevNumber=>prevNumber -1);}
} ;
const [color,setColor]=useState("Maroon")
function handleColorOnHover(color){
    setColor(color);
}
    return(
<div className="Market-container">
    <div>
<img src="images/pexels-anthony.jpg" />
</div>

<div className="checkout">
<h3>SuitCase Bags</h3>
<p>Comfortable to Transport Carrying around your things in a suitCase Bag is a lot easier than carrying them in other bags.</p>
<p className="paragraph">KSH.3,000</p>
<div className="select">
<h3>Size</h3>
<select>
    <option selected disabled>Size</option>
    <option value="S">Small</option>
    <option value="M">Medium</option>
    <option value="L">Large</option>
    <option value="XL">Extra Large</option>
</select>
</div>


<p className="maroon">Selected Color:<span style={{color:color}}>{color}</span></p>
<div className="text-contents">
    <div>
    <h2>Color</h2>
    </div>
    <div className="text"  onMouseOver={()=>{handleColorOnHover("Maroon")}} onMouseOut={()=>setColor("Maroon")}>
    <div className="list-type">

    </div>
    </div>
    <div className="text-2" onMouseOver={()=>{handleColorOnHover("Yellow")}} onMouseOut={()=>setColor("Maroon")}>
    <div className="list-2">
    </div>
    </div>
    <div className="text-3" onMouseOver={()=>{handleColorOnHover("Teal")}} onMouseOut={()=>setColor("Maroon")}>
    <div className="list-typ3" >
    </div>
    </div>
</div>

<div className="placeholder">
<div className="quantity-btn">
    <div>
<RemoveOutlinedIcon onClick={decrease}/>
</div>
<div>
<p className="number">{Number}</p>
</div>
<div>
<AddOutlinedIcon onClick={increase} />
</div>
</div>

<div className="add">
    <div>
<button>Add to Cart</button>
</div>

<div className="favor">
<FavoriteBorderOutlinedIcon />
</div>
<div>
<p>Add to Wishlist</p>
</div>


</div>
</div>

</div>


</div>




    )
}












export default SingleProductPage;