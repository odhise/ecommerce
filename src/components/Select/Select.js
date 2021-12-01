import React from "react";
import "./Select.css";

const Select=()=>{
return(


<div>
<h1 className="h1">Dresses</h1>

<div className="filter-product">
    <div className="filter-choice">

    <div className="size">
<h3>Filter Products:Size</h3>
<select>
    <option selected disabled >Size</option>
    <option value="1">S</option>
    <option value="2">M</option>
    <option value="3">L</option>
    <option value="4">XL</option>
</select>
</div>
<div className="color"> 
<h3>Color</h3>
<select>
<option selected disabled>Color</option>
    <option value="1">White</option>
    <option value="2">Black</option>
    <option value="3">Green</option>
    <option value="4">Red</option>
    </select>
    </div>
</div>

    <div className="price">
        <div>
    <h3>Filter Products:Price</h3>
    </div>
    <div>
    <select>
        <option selected disabled>Price</option>
        <option value="1">Highest to Lowest</option>
        <option value="2">Lowest to Highest</option>
    </select>
    </div>
</div>


    

</div>
</div>
)
}
export default Select;