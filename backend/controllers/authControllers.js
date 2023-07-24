import User from "../models/user";
import { uploads } from "../utils/cloudinary";
import fs from "fs";
import ErrorHandler from "../utils/errorHandler";
import bcrypt from "bcryptjs";
import APIFilters from "../utils/APIFilters";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
    };

    if (req.files.length > 0) {
      const uploader = async (path) => await uploads(path, "buyitnow/avatars");

      const file = req.files[0];
      const { path } = file;

      const avatarResponse = await uploader(path);
      fs.unlinkSync(path);
      newUserData.avatar = avatarResponse;
    }

    const user = await User.findByIdAndUpdate(req.user._id, newUserData);

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updatePassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("+password");

    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    const isPasswordMatched = await bcrypt.compare(
      req.body.currentPassword,
      user.password
    );

    if (!isPasswordMatched) {
      return next(new ErrorHandler("Old password is incorrect", 400));
    }

    const hashedNewPassword = await bcrypt.hash(req.body.newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const resPerPage = 2;
    const usersCount = await User.countDocuments();

    const apiFilters = new APIFilters(User.find(), req.query).pagination(
      resPerPage
    );

    const users = await apiFilters.query;

    res.status(200).json({
      usersCount,
      resPerPage,
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    let user = await User.findById(req.query.id);

    if (!user) {
      return next(new ErrorHandler("No user found with this ID", 404));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    let user = await User.findById(req.query.id);

    if (!user) {
      return next(new ErrorHandler("No user found with this ID", 404));
    }

    user = await User.findByIdAndUpdate(req.query.id, req.body.userData);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    let user = await User.findById(req.query.id);

    if (!user) {
      return next(new ErrorHandler("No User found with this ID", 404));
    }

    await user.deleteOne();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
