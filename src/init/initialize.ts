import { initHuaweiProject } from '../libs/huawei/auth/initHuaweiProject';

let huaweiClient: any;

export const initializeApp = async () => {
  try {
    huaweiClient = initHuaweiProject(
      process.env.SDK_AK,
      process.env.SDK_SK,
      process.env.PROJECT_ID
    );
    console.log('Huawei Client initialized successfully.');
  } catch (error) {
    console.error('Error during initialization:', error);
    throw error;  // stop when fail
  }
};

export const getHuaweiClient = () => huaweiClient;