

// import the model/schema
const Todo = require("../models/Todo")

exports.getTodo= async (req, res)=>{
    try{
        //fetch all todo items from database
        const todos = await Todo.find({})

        // response
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"entire data is fetched"
            }
        )
    }
    catch(err){
        console.err(err)
        res.status(500).json(
            {
                success:false,
                data:'internal server error',
                message:err.message
            }
        )
    }
}





// we can also make an another file for below
exports.getTodobyId= async (req, res)=>{
    try{
        // extract item based on id 
        // the id is in API url 
        const id=req.params.id;
        const todo = await Todo.findById({_id: id})
        // _id is seen from database syntax of as in our server the id is stored under _id 

        // data for given id is not found
        if(!todo){
            // 404 Not Found: The requested resource cannot be found on the server.
            return res.status(404).json(
                {
                    success:false,
                    message:"no data found with id"
                }
            )
        }
        // data found
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Todo ${id} data successfully fetched`
            }
        )
        
    }
    catch(err){
        console.err(err)
        res.status(500).json(
            {
                success:false,
                data:'internal server error',
                message:err.message
            }
        )
    }
}

