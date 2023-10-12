
let mongooseObj = require("mongoose")

schemaObj = mongooseObj.Schema

mongooseObj.connect("mongodb://127.0.0.1/personalProject")

let userSchema = new schemaObj({
    email : {type:String, required: true},
    password: {type:String, required: true},
    firstName: String,
    lastName: String,
    mobile: Number
})


let UserModel = mongooseObj.model('user',userSchema)

module.exports = UserModel