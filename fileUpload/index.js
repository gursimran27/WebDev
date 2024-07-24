
// app create
const express= require(`express`)
const app=express()
const fileUpload = require(`express-fileupload`) //for middleware
const path = require('path')
const fs = require('fs')

// PORT
require(`dotenv`).config()
const PORT = process.env.PORT || 3000

// const currentDir = __dirname
// const pathe =path.join(currentDir, '..');
// console.log("a",__dirname , path.resolve(pathe));
// if(fs.existsSync(pathe)){
//     console.log(true);
// }else{
//     console.log(false)
// }


// middleware
app.use(express.json()) // parsing the JSON data from http request
app.use(fileUpload( // for uploading and parsing
    {
        useTempFiles: true,
        tempFileDir:'/tmp/'
    }
)) //Simple express middleware for uploading files.

// Serve static files from the 'controllers/files' directory
app.use('/uploads/:id', (req, res, next) => {
    // console.log("ji")
    let userId = req.params.id;
    // userId = userId.toString()
    // console.log(userId)
    const userUploadsPath = path.join(__dirname, '/controllers/files/', userId);
  
    express.static(userUploadsPath)(req, res, next);
  });



// dB connection
const dbConnect = require(`./config/dataBase`)
dbConnect() 


// cloudinary connection (media server)
const cloudinary = require(`./config/cloudinary`)
cloudinary.cloudinaryConnect() //as it was exports.cloudinaryConnect
// or require(`./config/cloudinary`).cloudinaryConnect();


// api mount
const upload = require(`./routes/fileUpload`)
app.use(`/api/v1/upload`  , upload )


// activate server
app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})

// default route
app.get(`/` , (req , res)=>{
    res.send(`<b>this is default port</b>`)
})

