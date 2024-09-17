import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) =>{
    const userId = req.params.id;
    const currentUser  = req.user as any;
     // Authorization check
    if(!currentUser) {
      return res.status(403).json({ message: 'You need to login first' });
    }
    if (userId !== currentUser.id) {
      return res.status(403).json({ message: 'You are not authorized to update this user' });
    }
    else {
      console.log("user authorized to update")
      next();
    }
}