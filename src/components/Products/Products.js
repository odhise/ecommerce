import React from "react"
import './Products.css'
import Product from "../Product/Product" 
import {popularProducts} from"../../data"
const Products=()=>{
    return(
        <div className="product-items">
           { popularProducts.map(item=>{

               return(
               <div className="product-services">
                   <Product item={item} />

                   </div>
               )
           })}
        </div>
    )
}

export default Products