import { Router } from 'express';
import { metricsEndpoint } from '../metrics/prometheus';

const router = Router();

// root router
router.get('/', (req, res) => {
  res.send('Hello, Prometheus!');
});

// metrics router
router.get('/metrics', metricsEndpoint);

export default router;
