const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  // post itself is a model
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: String,
    require: true,
  },
});

// export
module.exports = mongoose.model("Like", likeSchema);
