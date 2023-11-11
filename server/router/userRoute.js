const express = require("express")
const userRouter = express.Router()

const userDataModel = require("../data_model/userDataModel")

userRouter.post("/api/update", (req,res)=>{
    let updatedUserInfo = req.body

    userDataModel.findOne({email: updatedUserInfo.email})
    .then((user)=>{

        if(user) {
       
            if(updatedUserInfo.reviewableProduct){
                let reviewableProducts =  updatedUserInfo.reviewableProduct;

                for(const product of reviewableProducts){
                    if(!user.reviewableProduct.includes(product)){
                        user.reviewableProduct.push(product)
                    }
                    
                }
            }else{
                user.firstName = updatedUserInfo.firstName
                user.lastName = updatedUserInfo.lastName
                user.address = updatedUserInfo.address
                user.mobile = updatedUserInfo.mobile
            }

            user.save()
            .then((data)=>{
                setTimeout(() => {
                    console.log(" successfully updated user " + data)
                    res.json(data)
                },2000)
            })
            .catch((err)=>{
                res.send("error occour when saving cartItem into db " + err)
            })
        }
        
    })
    .catch((err) =>{
        console.log("there is an error when finding a user in DB " + err)
        res.send(err)
    })
})

userRouter.post("/api/signin", (req,res)=>{
    let userInfo = req.body
    console.log(userInfo)

    userDataModel.findOne({email: userInfo.email, password: userInfo.password})
    .then((users)=>{

        console.log(users)
        res.send(users)
    })
    .catch((err)=>{
        console.log("there is an error when finding a user in DB " + err)
        res.send(err)
    })
})

userRouter.post("/api/signup", (req,res) =>{

    let userInfo = req.body
    console.log(userInfo.email)
    userDataModel.findOne({email: userInfo.email})
    .then((existingUser) =>{
        if(existingUser){
            
            res.send("email is also in used -> " + existingUser.email)
        }else{

            console.log("here new user")
            let newUser = new userDataModel(userInfo)

            newUser.save()
            .then((newUser) =>{
                console.log("new user successfully signed up")
                res.send(newUser)
            })
            .catch((err) =>{
                console.log("there is a problem on creating a new user")
                res.send(err)
            })
        }
    })
    .catch((err)=>{
        console.log("there is an error when finding a user in DB " + err)
        res.send(err)
    })
})


module.exports = userRouter