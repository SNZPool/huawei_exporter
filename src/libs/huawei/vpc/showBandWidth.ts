const core = require("@huaweicloud/huaweicloud-sdk-core");
const eip = require("@huaweicloud/huaweicloud-sdk-eip/v2/public-api");

export function showBandWidth(credentials: any, bandwidthId: string): any {
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
