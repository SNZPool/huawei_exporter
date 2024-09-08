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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandwidthUpstreamUsage = bandwidthUpstreamUsage;
exports.bandwidthDownstreamUsage = bandwidthDownstreamUsage;
const ces_1 = require("../libs/huawei/ces");
const initialize_1 = require("../init/initialize");
function bandwidthUpstreamUsage(bandwidthId, filter, period) {
    return __awaiter(this, void 0, void 0, function* () {
        const credential = (0, initialize_1.getHuaweiClient)();
        const up_result = yield (0, ces_1.getUpstreamBandWidthUsage)(credential, bandwidthId, filter, period);
        if (up_result) {
            return (0, ces_1.getLatestValue)(JSON.stringify(up_result));
        }
        else {
            return -1;
        }
    });
}
function bandwidthDownstreamUsage(bandwidthId, filter, period) {
    return __awaiter(this, void 0, void 0, function* () {
        const credential = (0, initialize_1.getHuaweiClient)();
        const down_result = yield (0, ces_1.getDownstreamBandWidthUsage)(credential, bandwidthId, filter, period);
        if (down_result) {
            return (0, ces_1.getLatestValue)(JSON.stringify(down_result));
        }
        else {
            return -1;
        }
    });
}
;
