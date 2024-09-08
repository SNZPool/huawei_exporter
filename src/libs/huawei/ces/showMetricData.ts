const core = require('@huaweicloud/huaweicloud-sdk-core');
const ces = require("@huaweicloud/huaweicloud-sdk-ces/v1/public-api");

// about namespace and metricName
// https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html
export async function showMetricData(credentials: any, request: any):Promise<any> {
	const endpoint = "https://ces.tr-west-1.myhuaweicloud.com";
	const client = ces.CesClient.newBuilder()
		.withCredential(credentials)
		.withEndpoint(endpoint)
		.build();
  try {
    const result = await client.showMetricData(request);
    return result;
  } catch (error) {
    console.error("Error fetching metric data:", error.message || error);
    return null;
  }
}