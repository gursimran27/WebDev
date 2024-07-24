const express = require(`express`)
const router = express.Router()

// import route handler / controller
const { login , signup} = require(`../controller/Auth`)
// import middleware
const { auth , isStudent , isAdmin } = require(`../middlewares/auth`)   

router.post('/login', login)
router.post('/signup', signup)




// !protected routes:

// testing protected route for single middleware
router.get(`/test` , auth , (req , res)=>{
    res.json(
        {
            success:true,
            message:`Welcome to protected route of TEST`
        }
    )
})



//syntax router.get(path , list of middleware , handler/controller)
// the below route mean if a req came to /student route then first auth middleware will active then isStudent middleware will active then only res is return to client
router.get(`/student` , auth , isStudent , (req , res)=>{
    res.json(
        {
            success:true,
            message:`Welcome to protected route of Student`
        }
    )
})


router.get(`/admin`, auth ,isAdmin , (req , res)=>{
    res.json(
        {
            success:true,
            message:`Welcome to protected route of Admin`
        }
    )
})



// import model
const User = require(`../models/user`)

router.get(`/getuserinfo` , auth , async( req , res)=>{
    try {
        // after the auth middleware , it will add payload/decode in our req obj
        const id = req.user.id
        const user = await User.findById(id)

        return res.status(200).json(
            {
                success:true,
                data:user,
                message:`successfully fetched`
            }
        )

    } catch (err) {
        return res.status(500).json(
            {
                success:false,
                error:err,
                message:`internal server error`
            }
        )
        
    }
})

module.exports = router