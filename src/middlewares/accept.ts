import { Request, Response, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  const header = req.headers['accept'];
  if (!!header && header === '*/*') return next();
  console.log('🧱  - Blocked by Accept');
  res.status(404).render('errors/404');
}
