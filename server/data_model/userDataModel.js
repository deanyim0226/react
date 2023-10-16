
let mongooseObj = require("mongoose")

schemaObj = mongooseObj.Schema

mongooseObj.connect("mongodb://127.0.0.1/personalProject")

let userSchema = new schemaObj({
    email : {type:String, required: true},
    password: {type:String, required: true},
    firstName: {type:String, default:""},
    lastName: String,
    address: String,
    mobile: Number,
    admin: {type:Boolean, default:false}
})


let UserModel = mongooseObj.model('user',userSchema)

module.exports = UserModel