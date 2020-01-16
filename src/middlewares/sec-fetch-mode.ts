import { Request, Response, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  const header = req.headers['sec-fetch-mode'];
  if (!header) return next();
  console.log('🧱  - Blocked by Sec Fetch Mode');
  res.status(404).render('errors/404');
}
