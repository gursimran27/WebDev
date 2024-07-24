const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  // post itself is a model
  post: {
    // this syntax is used when we want to refer an another model
    // the below will store id
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", //this is referance to Post model
  },
  user: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
});

// export
module.exports = mongoose.model("Comment", commentSchema)
