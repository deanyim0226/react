const express = require("express")

const reviewRouter = express.Router()

const reviewDataModel = require("../data_model/reviewDataModel")

reviewRouter.post("/api/getReviews", (req,res)=>{
    let reviewId = req.body.id

    reviewDataModel.find().then((allReviews)=>{
        
        let productReviews = allReviews.filter((item)=>{
            return item.reviewId === reviewId
        })
        
        productReviews.sort((a,b)=> b.date - a.date)
        
        console.log("successfully retreiving productReviews" + productReviews)
        res.send(productReviews)
        
    })
    .catch((err)=>{
        res.send(err)
    })
})

reviewRouter.post("/api/saveReview", (req,res)=>{
    let reviewInfo = req.body

    reviewDataModel.findOne({reviewId:reviewInfo.reviewId, userId:reviewInfo.userId, date:reviewInfo.date})
    .then((reviewData)=>{

        if(reviewData){
            //if it exists, then user wants to finx their views
            reviewData.context = reviewInfo.context
            reviewData.date = reviewInfo.date
            reviewData.productInfo = reviewInfo.productInfo

            reviewData.save()   
            .then((data)=>{
                res.json(data)
                console.log("successfully finxed/saved review")
            })
            .catch((err)=>{
                res.send("error occour when rewriting review into db " + err)
            })
        }else{
            //else just add it
            let newReview = new reviewDataModel(reviewInfo)
            newReview.save()
            .then((data)=>{
                res.json(data)
                console.log("successfully saved review")
            })
            .catch((err)=>{
                res.send("error occour when saving review into db " + err)
            })

        }
    })
})


module.exports = reviewRouter

