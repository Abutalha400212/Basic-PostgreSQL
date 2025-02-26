import express from "express";
import { PostController } from "./post.controller";



const router = express.Router();
router.get("/", PostController.getAllPosts);
router.post("/create", PostController.createPost);
router.patch("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);
router.get("/learn-query", PostController.learnAggragateAndGrouping);


export const postRoutes = router;