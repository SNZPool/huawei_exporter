"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startBandwidthRecordingJob = void 0;
const config_1 = __importDefault(require("../config"));
const prometheus_1 = require("../metrics/prometheus"); // 假设 `recordHuaweiBandWidth` 在 huaweiService 中定义
// 周期性执行的任务
const startBandwidthRecordingJob = () => {
    if (config_1.default.bandwidth_id) {
        // 设置定期任务，每隔一段时间执行一次
        console.log("startBandwidthRecordingJob");
        const interval = config_1.default.bandwidth_interval * 1000; // 将秒转换为毫秒
        // console.log(interval);
        (0, prometheus_1.recordHuaweiBandWidth)(config_1.default.project_id, config_1.default.bandwidth_id, config_1.default.bandwidth_filter, config_1.default.bandwidth_period);
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log('Starting bandwidth recording...');
                (0, prometheus_1.recordHuaweiBandWidth)(config_1.default.project_id, config_1.default.bandwidth_id, config_1.default.bandwidth_filter, config_1.default.bandwidth_period);
                console.log('Bandwidth recording completed successfully.');
            }
            catch (error) {
                console.error('Error recording bandwidth:', error);
            }
        }), interval);
    }
    else {
        console.warn('Bandwidth ID is not set. Skipping bandwidth recording job.');
    }
};
exports.startBandwidthRecordingJob = startBandwidthRecordingJob;
