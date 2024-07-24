
const mongoose = require(`mongoose`)

exports.dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URL, 
        {
        useNewUrlParser: true, 
        useUnifiedTopology: true
        }
    )
    .then( ()=>{console.log(`DB connection successfully`)})
    .catch((err)=>{console.log(`issue in DB connection`) 
    console.log(err)
    process.exit(1);
    });
}

// module.exports = dbConnect