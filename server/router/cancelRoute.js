const express = require("express")
const cancelRoute = express.Router()

const cancelDataModel = require("../data_model/cancelDataModel")

cancelRoute.delete("/api/deleteCancelledOrder", (req,res)=>{
    
    cancelDataModel.deleteOne({_id:req.body.orderid})
    .then((result)=>{
     
        console.log("we successfully deleted cancelled item " + result )
        res.send(result)
    })
    .catch((err)=>{
        console.log("error happened while deleting cancelled item  " + err)
    })
})

cancelRoute.post("/api/saveCancelledOrder", (req,res)=>{
    console.log("api is called from client")
    cancelDataModel.findOne({userid:req.body.userid})
    .then((canceledOrder)=>{

        let sechema = new cancelDataModel(req.body)
        console.log("schema is " + sechema)
        sechema.save()
        .then((data)=>{
            res.status(200).json(data)
            console.log("successfully added order into db" + data)
        })
        .catch((err)=>{
            console.log("err while saving canceled order")
        })
        
    })
    .catch((err)=>{

        console.log("error while saving canceled order into db" + err)
    })
})

cancelRoute.post("/api/getCancelledOrder", (req,res)=>{

    cancelDataModel.find().then((allCancelledOrder)=>{
        let fillteredOrder = allCancelledOrder.filter((item)=>{
            return item.userid === req.body.userid
        })

        res.status(200).json(fillteredOrder)
    })
    .catch((err)=>{
        console.log("error while finding data in db")
    })
})

module.exports = cancelRoute