import { NextFunction, Request, Response } from 'express'

export const apiVersion = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  response.setHeader('X-API-VERSION', process.env.npm_package_version || '')
  next()
}
