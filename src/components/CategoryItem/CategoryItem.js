import React from  "react";
const CategoryItem=({item})=>{
return(
    <div>
        <div className="category-image">
<img src={item.img} />
        </div>

        <div category-info>
            <h1>{item.title}</h1>
            <button>Shop Now</button>
        </div>


    </div>
)

}












export default CategoryItem;