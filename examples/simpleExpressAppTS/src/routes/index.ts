import { Router } from "express";
import userRouter from "./user.routes";
const router = Router();

router.use("/api/v1", userRouter);

export default router;
