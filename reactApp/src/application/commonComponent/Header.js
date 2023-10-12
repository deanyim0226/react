import React from "react";
import { NavLink, useNavigate } from "react-router-dom"

let Header = (props) =>{

    return(
        <div>
     
            <NavLink to = "/" className="" activeclassname = "success"> Home  </NavLink>

            <NavLink to = "/profile" className ="" activeclassname = "success">Profile</NavLink>
            <NavLink to = "/login" className= "" activeclassname = "success">LOG IN</NavLink>
            <NavLink to = "/register" className= "" activeclassname = "success">Register</NavLink>
            <NavLink to ="/shop" className= "" activeclassname= "success">SHOP</NavLink>
            <NavLink to = "/cart" className="" activeclassname ="success">CART</NavLink>
            <NavLink to = "/product" className= "" activeclassname ="success">PRODUCT</NavLink>
        </div>
    )

}

export default Header