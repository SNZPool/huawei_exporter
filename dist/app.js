"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const metricsMiddleware_1 = require("./middleware/metricsMiddleware");
const app = (0, express_1.default)();
app.use((0, metricsMiddleware_1.metricsMiddleware)());
app.use('/', routes_1.default);
exports.default = app;
