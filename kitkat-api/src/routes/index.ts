import { Router } from "express";
import authRouter from "./auth"
import userDataRouter from './usersData'
import moviesRouter from './movies'
const router = Router();

router.use(userDataRouter)
router.use(authRouter);
router.use(moviesRouter);

export default router;