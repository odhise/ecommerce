import React from "react" 
import "./Product.css"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Product=({item})=>{
    return(
        <div className="img-container">
            <div>
            <img src={item.img} />
            </div>
            <div className="items-price">
                
            </div>

                <div className="icons">
                <div className="icon-img">
            < AddShoppingCartOutlinedIcon />
            </div>
            <div className="icon-img">
           < SearchIcon />
           </div>
           <div className="icon-img">
           <FavoriteBorderIcon />
           </div>
                </div>
           
            
        </div>
    )
}









export default Product
