import { showMetricData } from "./showMetricData";

const ces = require("@huaweicloud/huaweicloud-sdk-ces/v1/public-api");

export async function getDownstreamBandWidthUsage(credential: Credential, bandwidthId: string, filter: string, period: Number):Promise<string> {
  const request = new ces.ShowMetricDataRequest();
  request.namespace = "SYS.VPC";
  request.metricName = "downstream_bandwidth_usage";
  request.dim0 = "bandwidth_id," + bandwidthId;
  request.filter = filter;
  request.period = period;
  request.to = Date.now();
  request.from = request.to - request.period * 1000;

  const result = await showMetricData(credential, request);
  return result;
}