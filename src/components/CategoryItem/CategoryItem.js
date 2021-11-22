
import React from  "react";
import "./CategoryItem.css"

const CategoryItem=({item})=>{
return(
    <div className="category-item">
        <div className="category-image">
<img src={item.img} />
        </div>

        <div className="category-info">
            <h1>{item.title}</h1>
            <button>Shop Now</button>
        </div>


    </div>
)

}












export default CategoryItem;