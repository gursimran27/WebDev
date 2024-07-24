//step-1 create a folder
//step-2 move to that folder
//step-3 npm init -y
//step-4 one folder in vs code
//step-5 npm i express
//step-6 create server.js file



// server instantiate
const express=require('express');
const app=express();


// middleware
// used to parse request.body in express ->PUT or POST
const bodyParser=require('body-parser');
// specificially parse JSON data and add it to the request.body object
app.use(bodyParser.json());


// activate the server on 8000 port
app.listen( 8000 , ()=>{
    console.log("server started at port no. 8000");
});

// Routes or API end points
app.get(`/` , (request , response)=>{
    response.send("hello ji kaise ho");
})

app.post(`/api/cars`, (request , response)=>{
    // data is in the body of request
    // destructure
    const{name,model}=request.body;
    console.log(name);
    console.log(model);
    response.send('car submitted successfully');
});


// connecting express with DB
const mongoose=require('mongoose');
// when i was writing localhost insted of 127.0.0.1 my connection was not established
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( ()=>{console.log("connection successful")})
.catch( (error)=>{console.log("received an error")})