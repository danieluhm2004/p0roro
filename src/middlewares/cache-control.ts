import { Request, Response, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  const header = req.headers['cache-control'];
  if (!header) return next();
  console.log('🧱  - Blocked by Cache Control');
  res.status(404).render('errors/404');
}
