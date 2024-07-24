// for referance see code help referance documentation upload
// media server
// v2 mean version 2
const cloudinary = require(`cloudinary`).v2

// Loads .env file contents into process.env obj.
require(`dotenv`).config()

exports.cloudinaryConnect = ()=>{
    try {
        cloudinary.config(
            {
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET
            }
        )
    } catch (error) {
        console.log(error);
    }
}
