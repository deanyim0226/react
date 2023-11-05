import React from "react"

let CouponItemCommponent = (props) =>{

    console.log("coupon component is called props is " + props.coupon)
    return(
        <>
            <option onChange={()=>props.fuc(props.discount)} value={props.discount}> {props.coupon.discount}</option>
        </>
    )
}

export default CouponItemCommponent
