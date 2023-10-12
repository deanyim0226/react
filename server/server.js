const express = require('express')
const cors = require('cors')


const productRoute = require("./router/productRoute")
const productApp = express()

const userRoute = require("./router/userRoute")
const userApp = express()

const cartRoute = require("./router/cartRoute")
const cartApp = express()

const app = express()
app.use(cors()) // middleware to expose api for other users as public
app.use(express.json({limit:'2mb',extended:false}))//json middle-ware for setting request content type to json in body

app.use('/shop', productRoute)
productApp.use('/', productRoute)

app.use('/user', userRoute)
userApp.use('/', userRoute)

app.use('/cart', cartRoute)
cartApp.use('/', cartRoute)


app.listen(9000)
console.log("listen to 9000 port")
app.get('/', function(req,res) {

    console.log(req)
    console.log(res)
    res.send("hello world!!!!")
})



/*
app.get('/', function(req,res) {

    res.send("hello world")
})

//setting up the middleware static to handle all the static files we need to serve to client
//serve static files like images css using static middleware
app.use('/static', express.static('public'))

//query param ex)/queryparam?name=daniel&age=25
app.get('/queryparam', function(req,res) {
    let name = req.query['name']
    let age = req.query['age']
    res.send(`this is the sname sent in query ${name} and ${age}`)
})

//route param :/name
app.get('/routeparam/:name', function(req,res){
    let routeParam = req.params['name']

    res.send(`This is the name sent in route param ${routeParam}`)
})


//redirect all request with/admin path to adminApp
app.use('/admin',adminApp)

//mounted admin app
adminApp.get('/', function(req,res){
    res.send("different route")
})


//wild card operator / default api
app.use('*', function(req,res){
    res.send("UNDER CONSTRUCTION")
})
*/
