const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },

  // array of likes referances i.e id's
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  // array of comments referance i.e id's
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model(`Post`, PostSchema);
