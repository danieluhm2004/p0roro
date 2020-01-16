import { Request, Response, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  const header = req.headers['user-agent'];
  if (!!header && header.startsWith('curl/')) return next();
  console.log('🧱  - Blocked by User Agent');
  res.status(404).render('errors/404');
}
