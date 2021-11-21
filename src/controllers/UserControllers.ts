/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { Request, Response} from "express";
import { where } from "sequelize/dist";
import { UserModel } from "../database/models/UserModels";

class UserController{
  async findAll(req: Request, res: Response){
    const users = await UserModel.findAll();
    return users.length > 0
    ? res.status(200).json(users)
    : res.status(204).send();
  }

  async findOne(req: Request, res: Response){
    const {userID} = req.params;
    const user = await UserModel.findOne({
      where: {
        id: userID,
      },
    });
    return user ? res.status(200).json(user) : res.status(404);
  }

  async create(req: Request, res: Response){
    const { name, email, age, designation, created} = req.body;
    console.log("teste");
    const user = await UserModel.create({
      name,
      email,
      age,
      designation,
      created
    });
    return res.status(201).json(user);
  }

  async update(req: Request, res: Response){
    const { userID } = req.params;
    await UserModel.update(req.body, 
      {
        where: 
        { 
          id: userID,
        }, 
      });
    return res.status(204).send();
    
  }

  async destroy(req: Request, res: Response){
    const { userID } = req.params;
    await UserModel.destroy( 
      {
        where: 
        { 
          id: userID,
        }, 
      });
    return res.status(204).send();
  }
}

export default new UserController();