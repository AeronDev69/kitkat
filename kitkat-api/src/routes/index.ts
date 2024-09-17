import { Router } from "express";
import authRouter from "./auth"
import userDataRouter from './usersData'
const router = Router();

router.use(userDataRouter)
router.use(authRouter);

export default router;