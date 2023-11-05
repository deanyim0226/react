import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

let OrderDetailComponent = (props) =>{

    let item = props.item

    return(
        <>
           {item.name} 
        </>
    )
}

export default React.memo(OrderDetailComponent)