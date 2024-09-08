import * as client from 'prom-client';
import { bandwidthUpstreamUsage, bandwidthDownstreamUsage } from "../controllers/huaweiController"

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
export function recordHttpRequest(method: string, route: string, statusCode: number) {
  httpRequestCounter.labels(method, route, statusCode.toString()).inc();
}
export async function recordHuaweiBandWidth(project_id: string, id: string, filter: string, period: number) {
  let up = await bandwidthUpstreamUsage(id, filter, period);
  percentHuaweiUpstreamBandWidthUsage.labels({project_id: project_id, bandwidth_id: id, filter: filter, period: period }).set(up);
  let down = await bandwidthDownstreamUsage(id, filter, period);
  percentHuaweiDownstreamBandWidthUsage.labels({project_id: project_id, bandwidth_id: id, filter: filter, period: period }).set(down);
}

// export metrics data
export const metricsEndpoint = async (req: any, res: any) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
};
