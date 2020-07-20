require("dotenv").config();
var mongoose = require("mongoose")
var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const mongoURI = 'mongodb://localhost:27017/meanloginreg'

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

const routes = require("./routee/routes")
app.use("/", routes)

app.listen(port, function(){
    console.log("server is running on port: " + port);
    
})
