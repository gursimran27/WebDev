// bussiness logic
 const mongoose=require('mongoose')

 require(`dotenv`).config();
//  this will load all the data of .env file in the process object

const dbConnect = ()=>{
    mongoose.connect( process.env.DATABASE_URL , {
            useNewUrlParser:true,
            useUnifiedTopology:true
    }  )
    .then( ()=>{console.log(`connection established`);})
    .catch( (error)=> {console.log(`error in DB connection`);
    console.log(error.messaage);
    // HW
    process.exit(1);
    });
}


module.exports = dbConnect;