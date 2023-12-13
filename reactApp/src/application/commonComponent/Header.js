import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { useState } from "react";

let Header = (props) =>{

    let user = useSelector((state)=>state.userReducer.user)
    
    return(


        <>
        <div className="header">
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark"> 
        <div class="container-fluid">
            <ul className="nav">
                <NavLink  to = "/"  className="nav-link" activeclassname = "success"   >Home </NavLink>
            </ul>

            {
                   user && user.email.length >= 1 ?
                   <>
                       <NavLink to ="/shop" className= "" activeclassname= "success">SHOP</NavLink>
                   </>
                   : ""
            }

            <div class="dropdown">
                <a class="btn btn-dark dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Account <span className="navbar-toggler-icon"></span>
                </a>
                <ul class="dropdown-menu">
                    {
                       user && user.email.length <= 0
                          ? 
                        <>
                        <NavLink to = "/login" className= "dropdown-item" activeclassname = "success">Sign in</NavLink>
                        <NavLink to = "/register" className= "dropdown-item" activeclassname = "success">Register</NavLink>
                      </>
                        : 
                       <>
                        <NavLink to = "/profile" className ="dropdown-item" activeclassname = "success">Profile</NavLink>
                        <NavLink to = "/coupon" className= "dropdown-item" activeclassname = "success">Coupon</NavLink>
                        <NavLink to = "/cart" className="dropdown-item" activeclassname ="success">Cart</NavLink>
                        <NavLink to = "/order" className= "dropdown-item" activeclassname ="success">Order</NavLink>
                        <NavLink to = "/cancelledOrder" className= "dropdown-item" activeclassname ="success">Cancelled Order</NavLink>
                        
                        <NavLink to = "/logout" className= "dropdown-item" activeclassname = "success">Logout</NavLink>
       
                            <>
                                {
                                    user.admin === true ? 
                                    <NavLink to = "/product" className= "dropdown-item" activeclassname ="success">Product</NavLink>
                                    : ""
                                }
                            </>
                        </>
                    }
                </ul>
            </div>
            </div>
        </nav>
        </div>
        </>

       

    )

}

export default Header


/*
<>
        
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark"> 
            <NavLink to = "/" className="nav-item" activeclassname = "success"  > Home  </NavLink>
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
        </nav>
        </>
*/