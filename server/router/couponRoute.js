const express = require("express")
const couponRoute = express.Router()

const couponDataModel = require("../data_model/couponDataModel")


couponRoute.post("/api/get", (req,res)=>{

    let userid = req.body.userid

    couponDataModel.find().then((allCoupon)=>{
        let userCoupon = allCoupon.filter((item)=>{
            item.userid === userid
        })
        console.log(userCoupon)
        res.send(userCoupon)
    })
    .catch((err)=>{
        res.send(err)
    })
})

couponRoute.post("/api/generate", (req,res) =>{

    let couponInfo = req.body
    console.log("coupon info1 is " + couponInfo.userid)
    console.log("coupon info2 is " + couponInfo.coupon)
    couponDataModel.findOne({userid:couponInfo.userid, couponid: couponInfo.coupon.id }).then((coupon)=>{

        if(coupon){
            //coupon exists
            console.log("coupon exist " + couponInfo.coupon)

            coupon.discount = couponInfo.coupon.discount
            coupon.date = couponInfo.coupon.date
            
            coupon.save()
            .then((data)=>{
                setTimeout(() => {
                    res.json(data)
                },1500)
            })
            .catch((err)=>{
                res.send("error occour when saving coupon into db " + err)
            })

        }else{
   
            console.log("coupon does not exist " + couponInfo.coupon)
            const coupon = {
                userid: couponInfo.userid,
                couponid: couponInfo.coupon.id,
                discount: couponInfo.coupon.discount,
                date: couponInfo.coupon.date 
            }
            //coupon is not there need to create coupon 
            let newCoupon = new couponDataModel(coupon)

            newCoupon.save()
            .then((data)=>{
                res.json(data)
            })
            .catch((err)=>{
                res.send("error occour while saving coupon into db " + err)
            })
        }
    })



    
})

module.exports = couponRoute
