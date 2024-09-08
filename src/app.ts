import express from 'express';
import metricsRouter from './routes';
import { metricsMiddleware } from './middleware/metricsMiddleware';

const app = express();
app.use(metricsMiddleware());
app.use('/', metricsRouter);

export default app;
