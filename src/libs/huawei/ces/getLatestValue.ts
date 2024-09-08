const core = require("@huaweicloud/huaweicloud-sdk-core");
const ces = require("@huaweicloud/huaweicloud-sdk-ces/v1/public-api");

//
interface Datapoint {
  average: number;
  timestamp: number;
  unit: string;
}

interface ApiResponse {
  datapoints: Datapoint[];
  metric_name: string;
  httpStatusCode: number;
}

// about namespace and metricName
// https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html
export function getLatestValue(jsonString: string): number {
  const data: ApiResponse = JSON.parse(jsonString);
  const maxTimestampDatapoint = data.datapoints.reduce((max, current) => {
      return current.timestamp > max.timestamp ? current : max;
  }, data.datapoints[0]);

  return maxTimestampDatapoint.average;
}
