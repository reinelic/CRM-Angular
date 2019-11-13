const express = require("express");
const app = express()
const router = express.Router()
const mongoose = require("mongoose");
const config = require('./config/database')
const path  = require('path');
const authentication = require('./routes/authentication')(router)
const bodyParser = require('body-parser');
const cors = require('cors')


mongoose.Promise = global.Promise,
mongoose.connect(config.uri,(err)=> {
    if(err){
    console.log('Could not connect to the database' + config.uri)
    }
    else{
        console.log('Connected to the database ' + config.db)
    }

})

//Middlewares

app.use(cors({
    origin:'http://localhost:4200'
}))

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

// Allow cross origin request , in this case from Angular Server 


// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.use(express.static(__dirname +'/client/dist/'));
app.use('/authentication',authentication)



//After building the angular application
// app.get ('*',(req,res)=> {
//     res.sendFile(path.join(__dirname + '/client/dist/index.html'))
// })

// app.get('*',(req,res) => {
//     res.send("Hello World")
   
// })



app.listen(3000,()=> console.log("The server is running"))