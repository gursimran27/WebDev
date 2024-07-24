const Like = require("../model/likemodel");
const Post = require("../model/postmodel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    const likeobj = new Like({
      post,
      user,
    });

    const savedLiked = await likeobj.save();

    // now also update the likes array in Post model

    const updatedPost = await Post.findByIdAndUpdate(
      { _id: post },
      { $push: { likes: savedLiked._id } },
      { new: true } 
    )
      .populate("likes")
      .exec();

    res.status(200).json({
      success: true,
      data: updatedPost,
      message: "liked post successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "internal server error",
    });
  }
};

// dislike

exports.unlikePost = async (req, res) => {
  try {
    // deletion will take place at 2 models...in posts (likes array) and other is like model
    const { post, like } = req.body;

    const deletedLike = await Like.findByIdAndDelete({ _id: like });

    const updatedPost = await Post.findByIdAndUpdate(
      { _id: post },
      { $pull: { likes: deletedLike._id } }, //delete
      { new: true } //returns updated document
    );

    res.status(200).json({
      success: true,
      data: updatedPost,
      message: "unliked post successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "internal server error",
    });
  }
};
