import {
  getUpstreamBandWidthUsage,
  getDownstreamBandWidthUsage,
  getLatestValue,
} from "../libs/huawei/ces";
import { getHuaweiClient } from "../init/initialize";

export async function bandwidthUpstreamUsage(bandwidthId:string, filter:string, period: number):Promise<number> {
  const credential = getHuaweiClient();
  const up_result = await getUpstreamBandWidthUsage(
      credential,
      bandwidthId,
      filter,
      period
  );
  if(up_result) {
    return getLatestValue(JSON.stringify(up_result))
  }else {
    return -1;
  }
}

export async function bandwidthDownstreamUsage(bandwidthId:string, filter:string, period: number):Promise<number> { 
  const credential = getHuaweiClient();     
  const down_result = await getDownstreamBandWidthUsage(
      credential,
      bandwidthId,
      filter,
      period
  );
  if(down_result) {
    return getLatestValue(JSON.stringify(down_result))
  }else {
    return -1;
  }
};
