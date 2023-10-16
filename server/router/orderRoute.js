const express = require("express")
const orderRoute = express.Router()

const orderDataModel = require("../data_model/orderDataModel")

orderRoute.delete("/api/delete", (req,res)=>{
    let orderid = req.orderid

    orderDataModel.deleteOne(({_id:orderid}))
    .then((result)=>{
        console.log("we successfully deleted the item " + result )
    })
    .catch((err)=>{
        console.log("error happened while deleting " + err)
    })
})

orderRoute.post("/api/get", (req,res) =>{

    let userId = req.body.userid
   
    orderDataModel.find().then((allOrder)=>{
        
        let userOrder = allOrder.filter( (item)=> {
            return item.userid === userId
        })
        console.log(userOrder)
        res.send(userOrder)
    })
    .catch((err)=>{
        res.send(err)
    })
})

orderRoute.post("/api/save", (req,res)=>{

    let orderInfo = req.body
    console.log("order info is " + orderInfo)
    orderDataModel.findOne({userid: orderInfo.userid, date: orderInfo.date})
    .then((orderData) =>{

        if(orderData){

            orderData.order = orderInfo.order

            console.log(orderInfo)
            console.log(orderData)
            orderData.save()
            .then((data)=>{
                console.log("successfully saved order data into existing db " + data)
                res.send(data)
            })
            .catch((err)=>{
                console.log("Error in the server while saving order data into db "  + err)
                res.send(err)
            })

        }else{

         
            let order = new orderDataModel(orderInfo)
            order.save()
            .then((data)=>{
                console.log("successfully saved order data into db " + data)
                res.send(data)
            })
            .catch((err)=>{
                console.log("Error in the server while saving order data into db "  + err)
                res.send(err)
            })
        }
    })
    .catch((err)=>{
        console.log("Error in the server while retreiving data from db "  + err)
        res.json(err)
    })
})

module.exports = orderRoute