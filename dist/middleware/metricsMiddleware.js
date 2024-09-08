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
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsMiddleware = void 0;
const prometheus_1 = require("../metrics/prometheus");
const metricsMiddleware = () => {
    return (req, res, next) => {
        res.on('finish', () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            (0, prometheus_1.recordHttpRequest)(req.method, ((_a = req.route) === null || _a === void 0 ? void 0 : _a.path) || req.path, res.statusCode);
        }));
        next();
    };
};
exports.metricsMiddleware = metricsMiddleware;
