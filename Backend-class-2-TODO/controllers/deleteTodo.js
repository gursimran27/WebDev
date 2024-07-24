// import the model/schema
const Todo = require("../models/Todo")


exports.deleteTodo = async (req, res)=>{
    try{
        // fetch id from url
        const {id}=req.params;

        const todo = await Todo.findByIdAndDelete( {_id: id})

        res.status(200).json(
            {
                success:true,
                message:`todo deleted`
            }
        )
    }
    catch(err){
            console.error(err)
            console.log(err);
            res.status(500).json(
                {
                    success:false,
                    data:'internal server error',
                    message:err.message
                }
            )
    }
}