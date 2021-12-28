import express from "express";

import { getPosts, createPost, getPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);

export default router;
