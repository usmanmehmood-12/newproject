const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//This will be our application entry. We'll setup our
//server here

const http=require('http')
// set up the express app

const app= express();

//log request to the console

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Models
var models= require("./models");
/*Sync Database  //will connect to a db and it will sync all of your models with the database
 and we really want this to run everytime the server starts so that if you have added any 
models its gonna be able to add them */

models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine');
}).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!");
})

//Require our routes into the application.
require('./routes')(app);
//parse incoming request data (https://github.com/expressjs/body-parser)

app.get('*', (req,res)=>res.status(200).send({

message: 'Welcome to the beginning of nothingness.',

}));

const port= parseInt(process.env.PORT, 10) || 8000;
app.set('port',port);

const server = http.createServer(app);
server.listen(port);
module.exports= app;


// const express= require('express');
// const bodyParser= require ('body-parser');

// //const http=require('http');

// const app=express();

// //log request to the console

// //app.use(logger(dev))

// //parse incoming requests data
// //app.use(bodyParser.json);
// //app.use(bodyParser.urlencoded({extended:true}));


// //Models
// var models= require('./models');
// /*Sync Database  //will connect to a db and it will sync all of your models with the database
//  and we really want this to run everytime the server starts so that if you have added any 
// models its gonna be able to add them */
// models.sequelize.sync().then(function(){
//     console.log('Nice Database looks fine');
// }).catch(function(err){
// console.log(err,"Something went wrong with the database Update!");
// })
// //Require our routes into the appliation

// require('./routes')(app);

// //Setup a default catch all route that sends back a welcome message in json format

// app.get('*',(req,res)=>{
//    res.send( 'Welcome to the beginning of nothingness.');
// });

// const port= parseInt(process.env.PORT || 3000);
// app.listen(port,()=>{

//     console.log("Server started on port 3000");
// });

// module.exports=app;
