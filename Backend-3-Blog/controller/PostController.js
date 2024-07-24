const Post = require("../model/postmodel");

exports.createPost = async (req, res) => {
  try {
    //  we can also use save() for creation of post likemodel...
    // const {title , body}= req.body;
    // const post= new Post({
    //     title , body
    // })
    // const savedPost = await post.save();

    const { title, body } = req.body;

    const post = Post.create({ title, body });

    res.status(200).json({
      success: true,
      data: post,
      message: `post created successfully`,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

// find all post

exports.findAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate(`comments`) //query
      .populate("likes")
      .exec();

    res.status(200).json({
      success: true,
      data: posts,
      message: "all posts are fetched",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
