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
exports.showMetricData = showMetricData;
const core = require('@huaweicloud/huaweicloud-sdk-core');
const ces = require("@huaweicloud/huaweicloud-sdk-ces/v1/public-api");
// about namespace and metricName
// https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html
function showMetricData(credentials, request) {
    return __awaiter(this, void 0, void 0, function* () {
        const endpoint = "https://ces.tr-west-1.myhuaweicloud.com";
        const client = ces.CesClient.newBuilder()
            .withCredential(credentials)
            .withEndpoint(endpoint)
            .build();
        try {
            const result = yield client.showMetricData(request);
            return result;
        }
        catch (error) {
            console.error("Error fetching metric data:", error.message || error);
            return null;
        }
    });
}
