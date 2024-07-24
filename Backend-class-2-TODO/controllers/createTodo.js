// business logic


// import the model/schema
const Todo = require("../models/Todo")


// define route handler
exports.createTodo = async (req, res)=>{
    try{
        // extract title and description  from request body
        const{title , description} =req.body;
        // for testing purpose we use postman through which we send a request

        // create a new Todo object and insert in DB
        const response= await Todo.create({title , description});

        // send a JSON response with a success flag
        // 200 OK: The server has successfully processed the request, and the requested content is returned in the response.
        res.status(200).json(
            {
                success:true,
                data:response,
                message:`entry created successfully`
            }
        );
    }
    catch(err){
            console.error(err)
            console.log(err);
            // 500 Internal Server Error: The server encountered an error while processing the request, and the request could not be completed.
            res.status(500).json(
                {
                    success:false,
                    data:'internal server error',
                    message:err.message
                }
            )
    }
}