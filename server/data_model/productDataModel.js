let mongooseObj = require("mongoose")

schemaObj = mongooseObj.Schema

mongooseObj.connect("mongodb://127.0.0.1/personalProject")

let productSchema = new schemaObj(
    {
        name: {type:String, required:true},
        price: {type:Number},
        description: {type:String},
        rating: {type:String},
        qty: {type: Number, default:1},
        imageUrl: {type:String},
        url: {type:String}

    }
);

let ProductModel = mongooseObj.model("product",productSchema)

module.exports = ProductModel

