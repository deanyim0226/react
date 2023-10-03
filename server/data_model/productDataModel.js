let mongooseObj = require("mongoose")

schemaObj = mongooseObj.Schema

mongooseObj.connect("mongodb://127.0.0.1/assessment4")


let productSchema = new schemaObj(
    {
        name: String,
        price: String,
        description: String,
        rating: String
    }
);

let ProductModel = mongooseObj.model("product",productSchema)

module.exports = ProductModel

