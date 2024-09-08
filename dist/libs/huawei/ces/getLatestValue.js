"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestValue = getLatestValue;
const core = require("@huaweicloud/huaweicloud-sdk-core");
const ces = require("@huaweicloud/huaweicloud-sdk-ces/v1/public-api");
// about namespace and metricName
// https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html
function getLatestValue(jsonString) {
    const data = JSON.parse(jsonString);
    const maxTimestampDatapoint = data.datapoints.reduce((max, current) => {
        return current.timestamp > max.timestamp ? current : max;
    }, data.datapoints[0]);
    return maxTimestampDatapoint.average;
}
