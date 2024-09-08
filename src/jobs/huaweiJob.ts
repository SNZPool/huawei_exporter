import config from '../config';
import { recordHuaweiBandWidth } from '../metrics/prometheus';

// cron job
export const startBandwidthRecordingJob = () => {
  if (config.bandwidth_id) {
    console.log("startBandwidthRecordingJob");
    const interval = config.bandwidth_interval * 1000; // transfer 's' to 'ms'
    recordHuaweiBandWidth(config.project_id, config.bandwidth_id, config.bandwidth_filter, config.bandwidth_period);
    setInterval(async () => {
      try {
        console.log('Starting bandwidth recording...');
        recordHuaweiBandWidth(config.project_id, config.bandwidth_id, config.bandwidth_filter, config.bandwidth_period);
        console.log('Bandwidth recording completed successfully.');
      } catch (error) {
        console.error('Error recording bandwidth:', error);
      }
    }, interval);
  } else {
    console.warn('Bandwidth ID is not set. Skipping bandwidth recording job.');
  }
};
