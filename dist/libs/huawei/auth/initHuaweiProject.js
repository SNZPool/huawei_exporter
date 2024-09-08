"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initHuaweiProject = initHuaweiProject;
const core = require('@huaweicloud/huaweicloud-sdk-core');
function initHuaweiProject(ak, sk, project_id) {
    const credentials = new core.BasicCredentials()
        .withAk(ak)
        .withSk(sk)
        .withProjectId(project_id);
    return credentials;
}
