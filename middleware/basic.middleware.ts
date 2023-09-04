import { Request, Response, NextFunction } from 'express';

export function sampleMiddleware(req: Request, res: Response, next: NextFunction) {
  next();
}
