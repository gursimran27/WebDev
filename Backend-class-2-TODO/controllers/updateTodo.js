// import the model/schema
const Todo = require("../models/Todo")


// * update the particular todo of id and the client will  send the new updated values of title and description in http request and that further our server will load all http request in req object
exports.updateTodo= async (req, res)=>{
    try{
        // fetch id by destructuring
        const {id}=req.params;
        // or
        // const id =req.params.id;

        // new title and description that client want to update
        const {title , description} = req.body;

        const todo = await Todo.findByIdAndUpdate( 
            {_id: id},
            {title , description , updatedAt: Date.now()}
        )

        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`updated successfully`
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