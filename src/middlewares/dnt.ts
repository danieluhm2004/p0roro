import { Request, Response, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  const header = req.headers['dnt'];
  if (!header) return next();
  console.log('🧱  - Blocked by DNT');
  res.status(404).render('errors/404');
}
