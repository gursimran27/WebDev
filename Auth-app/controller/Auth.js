
const bcrypt = require(`bcrypt`)
const jwt = require(`jsonwebtoken`)
// import model
const User = require(`../models/user.js`) 

// load the process obj with env content
require(`dotenv`).config()


// signup route handler
exports.signup = async (req , res)=>{
    try{
        
        //get data destructuring
        const {name , email , password , role } = req.body

        // check if user already exist
        const existingUser = await User.findOne({email:email})
        // if vaild entry found 
        if(existingUser){
            return res.status(400).json( //400->bad request
            {
                success:false,
                message:`User already exist`
            }) 
        }
        // hash the password using bcrypt library
        let hashedPassword;
        try{
             hashedPassword = await bcrypt.hash(password , 10) //10 -> number of rounds like passes in sorting
        }
        catch(err){
            return res.status(500).json(
                {
                    success:false,
                    message:`error in hashing password`
                }
            )
        }

        // create entry of user.....we can use create() or save()
        const newUser = await User.create({
            name ,
            email ,
            password: hashedPassword ,
            role
        })
        res.status(200).json(
            {
                success:true,
                message:`User created successfully`
            }
        )


    }
    catch(err){
        return res.status(500).json(
            {
                success:false,
                message:`error in creating user`,
                error:err,
            }
        )   
    }
}





// * login route handler

exports.login = async(req , res)=>{
    try{
        // data fetch 
        const { email , password} = req.body
        // validation on email and passwoord
        if(!email || !password){
            return res.status(400).json(
                {
                    success:false,
                    message:`email and password are required`
                }
            )
        }

        // check if user is registered or not in DB
        const user = await User.findOne({email})
        // if user is not registered 
        if(!user){ 
            return res.status(400).json(//400->bad request
                {
                    success:false,
                    message:`user not found`
                }
            )
        }

        const payload = {
            email: user.email,
            id: user._id,
            role:user.role //for authorization
        }
        // verify password and generate a JWT token
        if(await bcrypt.compare(password , user.password )){
            //user.password is hashed one that is stored in Db
            // create Token
            let token = jwt.sign(payload , process.env.JWT_SECRET , {
                expiresIn:'1h'
            }) 
                //we can also send directly this token as reponse but we will not create a new entry in user document (token) and we will send the token in cookie 
                // console.log(typeof(user));
                user.token = token
                // console.log(user);

                // we will remove the password from user object not DB to prevent hacking
                user.password = undefined 
                

                const options = {
                    expires: new Date(Date.now() + 3*24*60*60*1000 ), //3 days in milliseconds
                    httponly: true //not able to access on client side
                }
                // cookie has mainly 3 parameter i.e name of cookie , data of cookie , more option (expiration/http only etc)
                res.cookie(`token` , token , options).status(200).json(
                    {
                        success:true,
                        token,
                        user,
                        message:`user login successfully`
                    }
                )
        }
        else{
            // password do not match
            return res.status(400).json(//400->bad request
                {
                    success:false,
                    message:`password is incorrect`
                }
            )
        }
    }
    catch(err){
        // if any error return 500(internal server error)
        return res.status(500).json(
            {
                success:false,
                message:`login failure`
            }
        )
    }
}