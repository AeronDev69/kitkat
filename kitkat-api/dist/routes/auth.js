"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const passport_1 = __importDefault(require("passport"));
const helper_1 = require("../util/helper");
const index_1 = require("../models/index");
const router = (0, express_1.Router)();
router.get("/api/auth/status", (req, res) => {
    if (req.user)
        res.send(req.user);
    else {
        res.statusCode = 401;
        res.send("unauthorized");
    }
});
router.get("/api/auth/logout", (req, res) => {
    res.send("log out success");
    req.logOut((err) => {
        console.error(err);
    });
});
router.post("/api/auth/login", passport_1.default.authenticate("local"), (req, res) => {
    res.send(req.user);
});
router.post('/api/auth/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new models_1.User({
            username: req.body.username,
            password: (0, helper_1.hashPassword)(req.body.password)
        });
        const newUserData = new index_1.UserData({ user_id: newUser.id });
        yield newUserData.save();
        yield newUser.save();
        res.send("user created!");
    }
    catch (err) {
        res.statusCode = 400;
        res.send("failed to create user");
        console.error(err);
    }
}));
exports.default = router;
//# sourceMappingURL=auth.js.map