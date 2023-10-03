import React from "react";
import { NavLink, useNavigate } from "react-router-dom"

let Header = (props) =>{

    return(
        <div>
     
            <NavLink to = "/" className="button" activeclassname = "success"> Home  </NavLink>

            <NavLink to = "/qa" className ="button" activeclassname = "success">QA</NavLink>
            <NavLink to = "/login" className= "button" activeclassname = "success">LOG IN</NavLink>
            <NavLink to = "/register" className= "button" activeclassname = "success">Register</NavLink>
            <NavLink to ="/product" className= "button" activeclassname= "success">PRODUCT</NavLink>
        </div>
    )

}

export default Header