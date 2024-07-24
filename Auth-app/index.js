
const express= require(`express`)
const app=express()

require(`dotenv`).config();

const PORT= process.env.PORT || 4000


const cookieParser = require(`cookie-parser`)
app.use(cookieParser())
app.use(express.json()) //parser


app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})

// route import and mount
const user = require(`./routes/user`)
app.use(`/api/v1` , user)

require(`./config/database`).dbConnect();
