import { Router } from "express";
import { createUser } from "../controllers/user.controller";
const userRouter = Router();

userRouter.get("/", createUser);

export default userRouter;
