const express = require(`express`);
const router = express.Router();

// import controller
const { dummyController } = require(`../controller/dummy`);
const { createComment } = require("../controller/CommentController");
const { createPost, findAllPosts } = require("../controller/PostController");
const { likePost, unlikePost } = require("../controller/LikeController");

// mapping with controller
router.get(`/dummy`, dummyController);
router.post(`/comments/create`, createComment);
router.post(`/posts/create`, createPost);
router.get(`/posts`, findAllPosts);
router.post(`/likes/like`, likePost);
router.post("/likes/unlike", unlikePost);

// export
module.exports = router;
