const express = require("express");
const { setPosts, getPost, editPost, deletePost, likePost, dislikePost } = require("../controllers/post.controller");
const router = express.Router();

router.get("/", getPost);
router.post("/", setPosts);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/like-post/:id", likePost);
router.patch("/dislike-post/:id", dislikePost);

module.exports = router;