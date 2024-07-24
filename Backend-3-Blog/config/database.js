const mongoose = require(`mongoose`);

require(`dotenv`).config();
const URL = process.env.DB_URL;

const dbConnect = () => {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`DB connected successfully`))
    .catch((err) => {
      console.log(`DB connection error`);
      console.log(err);
      // abnormal termination
      process.exit(1);
    });
};

module.exports = dbConnect;
