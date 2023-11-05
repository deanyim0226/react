// Coupon Page 
// Create a component with Name - CouponComponent (Functional Component and Use Hooks)
// On the page add a Button - GenerateCoupon
// Upon Click Generate a random coupon of - 6 digits (basically a numeric random value)
// Dispatch this generated coupon using useDispatch
// Create a Coupon Reducer to have Coupon Value, Use Reducer to update the coupon value (useSelector coupon)
// Create action to pass coupon to reducer, with type and payload

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { generateCoupon }  from "../state/coupon/CouponAction";
import { saveCouponToDb} from "../state/coupon/CouponAction";


const Coupon = () =>{

    let couponList = useSelector((state)=>state.couponReducer)
    let user = useSelector((state)=>state.userReducer.user)

    let dispatchToDb = useDispatch()
    
    
    let click = (evt) =>{

        let numbers = ""
        let discount = Math.floor(Math.random() * 100)

        for(let i = 0; i <6; i++){    
            numbers += Math.round(Math.random() * 10)
        }

        numbers = numbers.substring(0,6)

        const generatedCouponTime = new Date()

        const couponInformation = {
            id: numbers,
            discount,
            date: generatedCouponTime

        }

        console.log("coupon number is " + numbers)
        console.log("list " + couponList)
        dispatchToDb(saveCouponToDb(user._id,couponInformation))
        evt.preventDefault()
    }

    useEffect(()=>{
        console.log(couponList)
    })

    return(
        <>
   
            <button onClick={click}>GenerateCoupon</button>
        </>
    )
}


export default Coupon