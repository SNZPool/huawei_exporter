"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
// 验证环境变量是否已配置
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
// 在初始化配置之前检查必需的环境变量
checkEnvVariables();
// 读取配置
const config = {
    port: parseInt(process.env.PORT || '3000', 10),
    sdk_ak: process.env.SDK_AK,
    sdk_sk: process.env.SDK_SK,
    project_id: process.env.PROJECT_ID,
    bandwidth_id: process.env.BANDWIDTH_ID || "",
    bandwidth_filter: process.env.BANDWIDTH_FILTER || "",
    bandwidth_period: parseInt(process.env.BANDWIDTH_PERIOD || '300', 10),
    bandwidth_interval: parseInt(process.env.BANDWIDTH_INTERVAL || '30', 10),
};
exports.default = config;
