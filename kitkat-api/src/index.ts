import express from 'express'
import bodyParser from "body-parser";
import routes from "./routes"
import mongoose from "mongoose";
import passport from 'passport'
import session from "express-session"
import "./strategies/local-strategy"
import MongoStore from "connect-mongo"
import cors from "cors"
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI!)
    .then(() => console.log("Connected to the database!"))
    .catch((err) => console.error(err))

const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: "secret",
    saveUninitialized: true,
	resave: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_SESSIONS_URI}),
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day expiration

}))
app.use(passport.initialize());
app.use(passport.session());


app.use(routes);

app.listen(5000, () => console.log("Server Started!"))