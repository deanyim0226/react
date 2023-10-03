const express = require("express")
const productRouter = express.Router()

const productDataModel = require("../data_model/productDataModel")

productRouter.post("/api/sendDetail", (req, res) =>{
    let product = req.body

    productDataModel.findOne({name:req.body.name}).then((existingProduct) =>{
  
        if(existingProduct){

            res.send(product)
        }else{
   

            let newProduct = new productDataModel(product)


            newProduct.save().then((newProduct) =>{
         
                res.send(newProduct)
         
            }).catch((err)=>{
                res.send("error")
            })
        }
    }).catch((err)=>{
        res.send("error")
    })


})

productRouter.get("/api/getProduct" , (req,res)=>{

    productDataModel.find().then((allProduct) =>{
        res.send(allProduct)
    }).catch((err)=>{
        res.send(err)
    })
})


module.exports = productRouter
