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
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const initialize_1 = require("./init/initialize");
const huaweiJob_1 = require("./jobs/huaweiJob");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // init
        yield (0, initialize_1.initializeApp)();
        console.log('All services initialized.');
        // start server
        const port = config_1.default.port;
        app_1.default.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
        (0, huaweiJob_1.startBandwidthRecordingJob)();
    }
    catch (error) {
        console.error('Failed to initialize application:', error);
        process.exit(1); // 初始化失败时退出
    }
});
// start
startServer();
