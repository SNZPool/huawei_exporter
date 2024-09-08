"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prometheus_1 = require("../metrics/prometheus");
const router = (0, express_1.Router)();
// root router
router.get('/', (req, res) => {
    res.send('Hello, Prometheus!');
});
// metrics router
router.get('/metrics', prometheus_1.metricsEndpoint);
exports.default = router;
