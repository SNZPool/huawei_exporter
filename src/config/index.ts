require("dotenv").config();

// 
function checkEnvVariables() {
  const requiredEnvVariables = [
    'SDK_AK', 
    'SDK_SK', 
    'PROJECT_ID'
  ];

  requiredEnvVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  });
}

// check config
checkEnvVariables();

interface Config {
  port: number;
  sdk_ak: string;
  sdk_sk: string;
  project_id: string;
  bandwidth_id: string;
  bandwidth_filter: string;
  bandwidth_period: number;
  bandwidth_interval: number;
}

// read config
const config: Config = {
  port: parseInt(process.env.PORT || '3000', 10),
  sdk_ak: process.env.SDK_AK,
  sdk_sk: process.env.SDK_SK,
  project_id: process.env.PROJECT_ID,
  bandwidth_id: process.env.BANDWIDTH_ID || "",
  bandwidth_filter: process.env.BANDWIDTH_FILTER || "",
  bandwidth_period: parseInt(process.env.BANDWIDTH_PERIOD || '300', 10),
  bandwidth_interval: parseInt(process.env.BANDWIDTH_INTERVAL || '30', 10),
};

export default config;
