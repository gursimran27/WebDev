
// schema with mongoose
// desciption of data
// mongoose instance 
const mongoose=require(`mongoose`);

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        description:{
            type:String,
            required:true,
            maxLength:50
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now()
        },
        updatedAt:{
            type:Date,
            reuired:true,
            default:Date.now()
        }

    }
)

// syntax
module.exports = mongoose.model("Todo", todoSchema);
// export as a named with Todo