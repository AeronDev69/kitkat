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
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const models_1 = require("../models");
const helper_1 = require("../util/helper");
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield models_1.User.findById(id);
        if (!findUser)
            throw new Error("User Not Found");
        console.log(id);
        console.log(findUser.id);
        done(null, findUser);
    }
    catch (err) {
        done(err, null);
    }
}));
exports.default = passport_1.default.use(new passport_local_1.Strategy((username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield models_1.User.findOne({ username });
        if (!findUser) {
            return done(null, false, {
                message: "asdasd"
            });
        }
        if (!(0, helper_1.comparePassword)(password, findUser.password))
            throw new Error("Bad Credentials");
        done(null, findUser);
    }
    catch (err) {
        console.log(err);
    }
})));
//# sourceMappingURL=local-strategy.js.map