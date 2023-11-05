let mongooseObj = require("mongoose")
mongooseObj.connect("mongodb://127.0.0.1/personalProject")


schemaObj = mongooseObj.Schema

let cancelSchema = new schemaObj({
    userid: {type:String, required:true},
    order: Object,
    date: Date
})

let CancelModel = mongooseObj.model("cancel",cancelSchema)
module.exports = CancelModel


