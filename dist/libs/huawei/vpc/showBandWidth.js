"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showBandWidth = showBandWidth;
const core = require("@huaweicloud/huaweicloud-sdk-core");
const eip = require("@huaweicloud/huaweicloud-sdk-eip/v2/public-api");
function showBandWidth(credentials, bandwidthId) {
    const endpoint = "https://vpc.tr-west-1.myhuaweicloud.com";
    const client = eip.EipClient.newBuilder()
        .withCredential(credentials)
        .withEndpoint(endpoint)
        .build();
    const request = new eip.ShowBandwidthRequest();
    request.bandwidthId = bandwidthId;
    const result = client.showBandwidth(request);
    return result;
}
