import app from "./app";
import config from "./config";
import { initializeApp } from "./init/initialize";
import { startBandwidthRecordingJob } from "./jobs/huaweiJob"

const startServer = async () => {
  try {
    // init
    await initializeApp();
    console.log('All services initialized.');

    // start server
    const port = config.port;
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });

    startBandwidthRecordingJob();

  } catch (error) {
    console.error('Failed to initialize application:', error);
    process.exit(1);
  }
};

// start
startServer();