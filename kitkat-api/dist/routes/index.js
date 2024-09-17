"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const usersData_1 = __importDefault(require("./usersData"));
const router = (0, express_1.Router)();
router.use(usersData_1.default);
router.use(auth_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map