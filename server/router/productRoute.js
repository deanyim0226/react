const express = require("express")
const productRouter = express.Router()

const productDataModel = require("../data_model/productDataModel")

productRouter.post("/api/sendDetail", (req, res) =>{
    let product = req.body

    productDataModel.findOne({name:product.name}).then((existingProduct) =>{
        
        if(existingProduct){
            /*
            if(product.review){
                existingProduct.product.reviews.push(product.review)
                existingProduct.save().then((updatedProduct) =>{
                    res.send(updatedProduct)
                }).catch((err)=>{
                    res.send("error")
                })
            }
            */
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

productRouter.get("/api/getProducts" , (req,res)=>{

    productDataModel.find().then((allProduct) =>{
        console.log(allProduct)
        res.send(allProduct)
    }).catch((err)=>{
        res.send(err)
    })
})


productRouter.post("/api/getProduct" , (req,res)=>{

    productDataModel.findOne({_id:req.body.productId})
    .then((product) =>{
        console.log(product)
        res.send(product)
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports = productRouter
