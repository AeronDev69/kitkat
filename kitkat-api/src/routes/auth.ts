import { Router } from "express";
import {User} from "../models";
import passport from "passport";
import { hashPassword } from "../util/helper";
import {UserData} from "../models/index";

const router = Router();

router.get("/api/auth/status", (req, res) =>{
    if(req.user) res.send(req.user);
    else {
        res.statusCode = 401;
        res.send("unauthorized")
    }
})

router.get("/api/auth/logout", (req, res) =>{
    res.send("log out success")
    req.logOut((err) =>{
        console.error(err)
    })
});

router.post("/api/auth/login", passport.authenticate("local") ,(req, res) => {
    res.send(req.user)
})

router.post('/api/auth/signup', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            password: hashPassword(req.body.password)
        })
        const newUserData = new UserData({user_id: newUser.id})
        await newUserData.save();
        await newUser.save();
        res.send("user created!")
    } catch (err) {
        res.statusCode = 400;
        res.send("failed to create user")
       console.error(err);
    }
});


export default router;