import {Router} from "express";
import userRouter from "../routes/userRouter"
import auth from "../middleware/auth";

const router:Router = Router();

router.use("/users", userRouter);

export default router;
