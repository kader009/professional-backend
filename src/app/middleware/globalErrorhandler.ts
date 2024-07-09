import { NextFunction, Request, Response } from "express"

export const globarError = (error: any, req: Request, res: Response, next: NextFunction) => {
  const StatusCode = 500
  const message = error.message || 'something went wrong'

  return res.status(StatusCode).json({
    success: false,
    message,
    error: error,
  })
}