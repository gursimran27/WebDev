// driver code 

const express = require(`express`)
const app = express()

// load config from .env file
require(`dotenv`).config();

const PORT= process.env.PORT || 4000;
// if port doesnot come from env file then take port as 4000

// middleware to parse json request body
app.use(express.json())


// import routes for Todo API
const todoRoutes= require(`./routes/todo`)

// mount/add/append the todo API routes i.e version
app.use( `/api/v1`, todoRoutes)


// start server
app.listen(PORT , ()=>{
    console.log(`server started at port ${PORT}`);
})

// DB connection
const dbConnect=require(`./config/database`)
// call the dbConnect
dbConnect();



// default route
app.get("/", (req,res)=>{
    res.send(`<h1><i>This is home page</i></h1>`)
})