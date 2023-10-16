import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

let Header = (props) =>{

    let user = useSelector((state)=>state.userReducer.user)

    return(
        <>
            <NavLink to = "/" className="" activeclassname = "success"> Home  </NavLink>
            <NavLink to = "/register" className= "" activeclassname = "success">Register</NavLink>
            <NavLink to = "/login" className= "" activeclassname = "success">LOG IN</NavLink>
            {
                user && user.email.length >= 1 ?
                <>
                    <NavLink to = "/profile" className ="" activeclassname = "success">Profile</NavLink>
                    <NavLink to ="/shop" className= "" activeclassname= "success">SHOP</NavLink>
                    <NavLink to = "/cart" className="" activeclassname ="success">CART</NavLink>
                    <NavLink to = "/order" className= "" activeclassname ="success">ORDER</NavLink>
                    <>
                    {
                        user.admin === true ? 
                        <NavLink to = "/product" className= "" activeclassname ="success">PRODUCT</NavLink>
                        : ""
                    }
              
                    </>
                </>

                : ""
            }
        </>
    )

}

export default Header