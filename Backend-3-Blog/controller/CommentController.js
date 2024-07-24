// import
const Comment = require(`../model/commentmodel`);
const Post = require(`../model/postmodel`);

// business logic
exports.createComment = async (req, res) => {
  try {
    // * alternate method rather than Create() is save func...after creating the object
    //  like const comm = await Comment.create(
    //     {post , user , body}
    // )

    // fetch data from user body
    const { post, user, body } = req.body;

    // create a comment object
    const comment = new Comment({
      post,
      user,
      body,
    });

    // save the comment into the dataBase
    const savedComment = await comment.save();

    // we also need to save id of comment in Post model

    // find the Post by Id then update the comment attributex
    const updatedPost = await Post.findByIdAndUpdate(
      post, //istead of post we can use {_id:post}
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      //* push is used to update a new entry to model and pull is used to delete some attribute from model
      //* {new:true} means that return the updated version of document rather than older one

      .populate("comments") //populate the comments array(of Post model ) with comment document(rather than just showing id's) ...this is seen in response
      .exec();

    res.status(200).json({
      post: updatedPost,
      message: `comment created successfully`,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "internal server error",
    });
  }
};
