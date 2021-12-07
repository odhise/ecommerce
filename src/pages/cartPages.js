import React from "react"
import Nav from "../components/Nav/Nav"
import Announcement  from "../components/Announcements/Announcements"
import Footer from "../components/Footer/Footer"
import Cart from "../pages/Cart/Cart"


const Cart=()=>{
    return(
        <div>
            <Nav />

            <Announcement />

            <CartPages />

            <Footer />


        </div>
    )
}


export default CartPages