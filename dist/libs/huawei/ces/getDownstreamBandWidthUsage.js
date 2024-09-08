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
exports.getDownstreamBandWidthUsage = getDownstreamBandWidthUsage;
const showMetricData_1 = require("./showMetricData");
const ces = require("@huaweicloud/huaweicloud-sdk-ces/v1/public-api");
function getDownstreamBandWidthUsage(credential, bandwidthId, filter, period) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = new ces.ShowMetricDataRequest();
        request.namespace = "SYS.VPC";
        request.metricName = "downstream_bandwidth_usage";
        request.dim0 = "bandwidth_id," + bandwidthId;
        request.filter = filter;
        request.period = period;
        request.to = Date.now();
        request.from = request.to - request.period * 1000;
        const result = yield (0, showMetricData_1.showMetricData)(credential, request);
        return result;
    });
}
