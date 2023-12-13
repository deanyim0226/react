const express = require("express")
const productRouter = express.Router()

const productDataModel = require("../data_model/productDataModel")

productRouter.post("/api/updateProdcut", (req, res)=>{
    console.log("received  "+ req.body.updatedInfo)

    let {existingProduct, updatedInfo } =  req.body

    productDataModel.findOne({name:existingProduct.name}).then((response) => {

        if(response){
            //product is there and ready to update
            response.rating = updatedInfo
            console.log("existing product is " + existingProduct)
            console.log("rating is " + updatedInfo)

            response.save().then((result)=>{

                console.log("returning the result " + result)
                res.send(result)
            })
            
        }else{

        }
    })
})

productRouter.post("/api/sendDetail", (req, res) =>{
    let product = req.body

    productDataModel.findOne({name:product.name}).then((existingProduct) =>{
        
        if(existingProduct){
            
            /// it is better to do something else instead of doing it here 
            console.log("product already exists, exitsting prodcut is " + existingProduct)
            //res.send(product)

        }else{
    
            let newProduct = new productDataModel(product)
            newProduct.save().then((newProduct) =>{
                console.log("new product is " + newProduct)
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
