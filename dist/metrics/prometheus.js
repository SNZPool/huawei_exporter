"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.metricsEndpoint = void 0;
exports.recordHttpRequest = recordHttpRequest;
exports.recordHuaweiBandWidth = recordHuaweiBandWidth;
const client = __importStar(require("prom-client"));
const huaweiController_1 = require("../controllers/huaweiController");
// create a register
const register = new client.Registry();
// collect default metricss
client.collectDefaultMetrics({ register });
// define custom metrics
const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code'],
});
const percentHuaweiUpstreamBandWidthUsage = new client.Gauge({
    name: 'percent_huawei_upstream_bandwidth_usage',
    help: 'The percent of huawei upstream bandwidth usage',
    labelNames: ['project_id', 'bandwidth_id', 'filter', 'period'],
});
const percentHuaweiDownstreamBandWidthUsage = new client.Gauge({
    name: 'percent_huawei_downstream_bandwidth_usage',
    help: 'The percent of huawei downstream bandwidth usage',
    labelNames: ['project_id', 'bandwidth_id', 'filter', 'period'],
});
// register custom metrics
register.registerMetric(httpRequestCounter);
register.registerMetric(percentHuaweiUpstreamBandWidthUsage);
register.registerMetric(percentHuaweiDownstreamBandWidthUsage);
// record custom metrics
function recordHttpRequest(method, route, statusCode) {
    httpRequestCounter.labels(method, route, statusCode.toString()).inc();
}
function recordHuaweiBandWidth(project_id, id, filter, period) {
    return __awaiter(this, void 0, void 0, function* () {
        let up = yield (0, huaweiController_1.bandwidthUpstreamUsage)(id, filter, period);
        percentHuaweiUpstreamBandWidthUsage.labels({ project_id: project_id, bandwidth_id: id, filter: filter, period: period }).set(up);
        let down = yield (0, huaweiController_1.bandwidthDownstreamUsage)(id, filter, period);
        percentHuaweiDownstreamBandWidthUsage.labels({ project_id: project_id, bandwidth_id: id, filter: filter, period: period }).set(down);
    });
}
// export metrics data
const metricsEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.set('Content-Type', register.contentType);
    res.end(yield register.metrics());
});
exports.metricsEndpoint = metricsEndpoint;
