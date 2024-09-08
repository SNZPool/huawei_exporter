const core = require('@huaweicloud/huaweicloud-sdk-core');

export function initHuaweiProject(ak: string, sk: string, project_id: string):any {
  const credentials = new core.BasicCredentials()
    .withAk(ak)
    .withSk(sk)
    .withProjectId(project_id);
  return credentials;
}