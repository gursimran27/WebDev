
// model creation need 2 things that are name and schema

const mongoose = require(`mongoose`)

const userSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
        },
        role:{ //for authorization
            type:String,
            enum:[`Admin` , `Student` , `Visitor`] //!role can take only one from these three things
        }
        
    }
)

module.exports = mongoose.model( `User` , userSchema)

