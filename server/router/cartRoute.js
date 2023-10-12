const express = require("express")
const cartRoute = express.Router()

const cartDataModel = require("../data_model/cartDataModel")

cartRoute.post("/api/additem", (req,res) =>{

    let item = req.body

    cartDataModel.findOne({userid: item.userid})
    .then((cartData) =>{

        if(cartData){
            
            cartData.cart = item.cart
            cartData.save()
            .then((data)=>{
                setTimeout(() => {
                    res.json(data)
                },3000)
            })
            .catch((err)=>{
                res.send("error occour when saving cartItem into db " + err)
            })

        }else{

            let cartItem = new cartDataModel(item)

            cartItem.save()
            .then((data)=>{
                res.json(data)
            })
            .catch((err)=>{
                res.send("error occour when saving cartItem into db " + err)
            })

        }
    })
})

cartRoute.post("/api/getUserCart",(req, res)=>{
    
    cartDataModel.findOne({userid: req.body.userid})
        .then((cart) => { res.json(cart) })
        .catch((err)=>{res.send("Error Occurred"+ err);})
});

module.exports = cartRoute