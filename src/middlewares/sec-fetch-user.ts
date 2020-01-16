import { Request, Response, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  const header = req.headers['sec-fetch-user'];
  if (!header) return next();
  console.log('🧱  - Blocked by Sec Fetch User');
  res.status(404).render('errors/404');
}
