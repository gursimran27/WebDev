
// import instance of nodenailer
const nodemailer = require(`nodemailer`)

require(`dotenv`).config()


// creation of transpoter
const transporterCreation = ()=>{
    try {
        // transpoter creation
        // Best practice is to make transpoter in config folder
        const transporter = nodemailer.createTransport(
            {
            host: process.env.MAIL_HOST, 
            service: "gmail",  
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })

        return transporter;

    } catch (err) {
        console.log(err);
    }
}

module.exports = transporterCreation;