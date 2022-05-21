import { NextFunction, Response, Request } from 'express'

function authorMiddleware (_req: Request, res: Response, next: NextFunction): void {
  res.locals.author = {
    name: process.env.AUTHOR_FIRTS_NAME,
    lastname: process.env.AUTHOR_LAST_NAME
  }
  next()
}

export default authorMiddleware
