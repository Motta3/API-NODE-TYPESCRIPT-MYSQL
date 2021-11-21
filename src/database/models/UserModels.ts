/* eslint-disable prettier/prettier */
import { DataTypes } from "sequelize/dist";
import { db } from "../db";

export const UserModel = db.define("user",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    designation:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    created:{
        type: DataTypes.DATE,
    },
});