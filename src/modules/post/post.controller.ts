import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
    try {
      const result = await PostService.createPost(req.body);
      res.json({
        success: true,
        message: "Post Created Successfully!",
        data: result,
      });
    } catch (error) {
      res.json({
        success: false,
        error: error,
      });
    }
  };
  const getAllPosts = async (req: Request, res: Response) => {
    try {
      const options = req.query
      const result = await PostService.getAllPosts(options);
      res.json({
        success: true,
        message: "Posts Retrived Successfully!",
        total:result.total,
        data: result.data,
       
      });
    } catch (error) {
      res.json({
        success: false,
        error: error,
      });
    }
  };
  const updatePost = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id) 
      const payload = req.body
      const result = await PostService.updatePost(id,payload);
      res.json({
        success: true,
        message: "Post Updated Successfully!",
        data: result,
       
      });
    } catch (error) {
      res.json({
        success: false,
        error: error,
      });
    }
  };
  const deletePost = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id) 
      const result = await PostService.deletePost(id);
      res.json({
        success: true,
        message: "Post Deleted Successfully!",
        data: result,
       
      });
    } catch (error) {
      res.json({
        success: false,
        error: error,
      });
    }
  };
  const learnAggragateAndGrouping = async (req: Request, res: Response) => {
    try {
      const result = await PostService.learnAggragateAndGrouping();
      res.json({
        success: true,
        message: "Aggragation Or Grouping Executed Successfully!",
        data: result,
       
      });
    } catch (error) {
      res.json({
        success: false,
        error: error,
      });
    }
  };

  export const PostController = {
    createPost,
    getAllPosts,
    updatePost,
    deletePost,
    learnAggragateAndGrouping
  }