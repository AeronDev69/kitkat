"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const db = mongoose_1.default.connection.useDb("client");
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
});
const User = db.model("User", UserSchema);
exports.User = User;
//# sourceMappingURL=User.js.map