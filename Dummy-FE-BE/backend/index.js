const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const dbConnect = require("./config/database");
const userRoutes = require("./routes/user");

var cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);


// Middleware
app.use(express.json());

// mounting
app.use("/api/v1", userRoutes);

// CORS Configuration
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
