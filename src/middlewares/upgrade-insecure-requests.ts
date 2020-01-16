import { Request, Response, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  const header = req.headers['upgrade-insecure-requests'];
  if (!header) return next();
  console.log('🧱  - Blocked by Upgrade Insecure Requests');
  res.status(404).render('errors/404');
}
