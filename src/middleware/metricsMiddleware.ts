import { recordHttpRequest, recordHuaweiBandWidth } from "../metrics/prometheus";
import { Request, Response, NextFunction } from 'express';
import config from "../config";

export const metricsMiddleware = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.on('finish', async () => {
      recordHttpRequest(req.method, req.route?.path || req.path, res.statusCode);
    });
    next();
  };
};
