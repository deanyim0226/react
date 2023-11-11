let mongooseObj = require("mongoose")

mongooseObj.connect("mongodb://127.0.0.1/personalProject")
schemaObj = mongooseObj.Schema

let reviewSchema = new schemaObj(
    {
        reviewId: { type:String, required:true},
        userId: {type:String, required:true},
        userInfo: Object,
        productInfo: Object,
        title:String,
        context: String,
        date: Date,
        rating: Number
    }
); 

let reviewModel = mongooseObj.model("review", reviewSchema)
module.exports = reviewModel


