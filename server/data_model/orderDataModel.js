let mongooseObj = require("mongoose")
mongooseObj.connect("mongodb://127.0.0.1/personalProject")

schemaObj = mongooseObj.Schema

let orderSchema = new schemaObj({
    userid: {type:String, required:true},
    order: Object,
    date: Object
})

let OrderModel = mongooseObj.model("order", orderSchema)
module.exports = OrderModel