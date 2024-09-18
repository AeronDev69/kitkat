import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  if(req.isAuthenticated()){
    next();
  } else {
    res.status(401).send("not login yet");
  }
}