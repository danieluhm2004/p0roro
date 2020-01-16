import { Request, Response, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  res.header('server', 'nginx/1.17.7');
  res.header('status', '404');
  next();
}
