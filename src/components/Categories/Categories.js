import React from "react"
import CategoryItem from "../CategoryItem/CategoryItem";
import "./Categories.css"
import  {categories}  from "../../data";


const  Categories=()=>{
    return(
        <div className="category-container">

            {
    
categories.map(item=>{
    return(
        <CategoryItem item={item}/>


    )

})
}

</div>


    )
    


}
    






export default Categories;