const express = require("express");
const app = express();

require(`dotenv`).config();
const PORT = process.env.PORT || 4000;

// middleware for json request
app.use(express.json());

// imported routes
const blog = require(`./routes/blog`);

// mount
app.use("/api/v1", blog);

app.get(`/`, (req, res) => {
  res.send(`hello there , `);
});

// db connect
const dbConnect = require(`./config/database`);
dbConnect();

// start the server
app.listen(PORT, () => {
  console.log("server started at port: 8000");
});

