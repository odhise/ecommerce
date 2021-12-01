
import React from "react";
import Products from "../components/Products/Products";
import Announcements from "../components/Announcements/Announcements";
import Nav from "../components/Nav/Nav"
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Select from "../components/Select/Select"


const ProductPage=()=>{
    return(
        <div>
<Nav />
<Announcements />
<Select />
<Products />
<Newsletter />
<Footer />
</div>

    )
}
export default ProductPage