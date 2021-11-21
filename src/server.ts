/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";

const app = express();

app.use(json());
app.use(router);

app.listen(8405, async () => {
  await db.sync();
  console.log(`App ${process.env.PROJECT_NAME} NA PORTA 8405`);
});