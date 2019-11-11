const express = require("express");
const app = express()
const mongoose = require("mongoose");
const config = require('./config/database')
const path  = require('path')



mongoose.Promise = global.Promise,
mongoose.connect(config.uri,(err)=> {
    if(err){
    console.log('Could not connect to the database' + config.uri)
    }
    else{
        console.log('Connected to the database ' + config.db)
    }

})


app.use(express.static(__dirname +'/client/dist'))

//After building the angular application
// app.get ('*',(req,res)=> {
//     res.sendFile(path.join(__dirname + '/client/dist/index.html'))
// })

app.get('*',(req,res) => {
    res.send("Hello World")
   
})


app.listen(3000,()=> console.log("The server is running"))