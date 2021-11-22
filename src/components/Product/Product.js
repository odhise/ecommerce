import React from "react" 
import "./Product.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Product=({item})=>{
    return(
        <div className="img-container">
            <img src={item.img} />
            <div className="items-price">
                
            </div>

                <div className="icons">
                <div>
            <ShoppingCartIcon />
            </div>
            <div>
           < SearchIcon />
           </div>
           <div>
           <FavoriteBorderIcon />
           </div>
                </div>
           
            
        </div>
    )
}









export default Product
