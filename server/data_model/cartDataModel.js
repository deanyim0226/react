let mongooseObj = require("mongoose")
mongooseObj.connect("mongodb://127.0.0.1/personalProject")

schemaObj = mongooseObj.Schema

let cartSchema = new schemaObj({
    userid: {type:String, required:true},
    cart: Object
})

let CartModel = mongooseObj.model("cart", cartSchema)
module.exports = CartModel