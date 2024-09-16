import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDB(req.body);
    res.json({
      success: true,
      message: "User Created Successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};
const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);
    res.json({
      success: true,
      message: "Profile Created/Updated Successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};
const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    res.json({
      success: true,
      message: "User Retrived Successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(parseInt(req.params.id));
    res.json({
      success: true,
      message: "Single User Retrived Successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};

export const UserController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUsers,
  getSingleUser,
};
