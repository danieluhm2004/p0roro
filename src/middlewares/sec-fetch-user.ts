import { Request, Response, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  const header = req.headers['sec-fetch-user'];
  if (!header) return next();
  res.status(404).render('errors/404');
}
