import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../models";
import mongoose from "mongoose";
import { comparePassword } from "../util/helper";

passport.serializeUser((user: any, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const findUser = await User.findById(id);
		if (!findUser) throw new Error("User Not Found");
        console.log(id)
        console.log(findUser.id)
		done(null, findUser);
	} catch (err) {
		done(err, null);
	}
});

export default passport.use(new Strategy(async (username, password, done) =>{
    try {
        const findUser = await User.findOne({username});
        if(!findUser) throw new Error("User not found");
        if (!comparePassword(password, findUser.password as unknown as string))
				throw new Error("Bad Credentials");
		done(null, findUser);
        
    } catch (err) {
       console.log(err) ;
    }
}))