let mongooseObj = require("mongoose")

mongooseObj.connect("mongodb://127.0.0.1/personalProject")

schemaObj = mongooseObj.Schema

let couponSchema = new schemaObj({
    userid: {type:String, required:true},
    couponid: String,
    discount: Number,
    date: Date
    
})

let CouponModel = mongooseObj.model("coupon",couponSchema)

module.exports = CouponModel