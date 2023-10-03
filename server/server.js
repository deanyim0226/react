const express = require('express')
const app = express()

const adminApp = express()

const productRoute = require("./router/route")
const productApp = express()

const cors = require('cors')
app.use(cors()) // middleware to expose api for other users as public
app.use(express.json({limit:'2mb',extended:false}))//json middle-ware for setting request content type to json in body

app.use('/product',productRoute)
productApp.use('/', productRoute)




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

app.listen(9000)