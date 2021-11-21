/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
import express from "express";
import UserControllers from "./controllers/UserControllers";

const router = express.Router();

//create
router.post("/users",UserControllers.create);
//read
router.get("/users", UserControllers.findAll);
//read user
router.get("/users/:userID", UserControllers.findOne);
//update
router.put("/users/:userID", UserControllers.update);
//delete
router.delete("/users/:userID", UserControllers.destroy);

export {router};