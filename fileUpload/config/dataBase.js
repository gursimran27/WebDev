const mongoose = require(`mongoose`);

require(`dotenv`).config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>  {
      console.log(`DB connection successfull`);
    })
    .catch((err) => {
      console.log(err);
      console.log(`DB connection failed`);
      process.exit(1);
    });
};

module.exports = dbConnect;
