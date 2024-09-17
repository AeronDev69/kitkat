"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
require("./strategies/local-strategy");
const connect_mongo_1 = __importDefault(require("connect-mongo"));
require('dotenv').config();
mongoose_1.default.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to the database!"))
    .catch((err) => console.error(err));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, express_session_1.default)({
    secret: "secret",
    saveUninitialized: true,
    resave: false,
    store: connect_mongo_1.default.create({ mongoUrl: process.env.MONGODB_SESSIONS_URI }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(routes_1.default);
app.listen(3000, () => console.log("Server Started!"));
//# sourceMappingURL=index.js.map