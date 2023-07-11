import { HttpResponseAdapterModel } from '@core/models/http/http_response.model'
import { NextFunction, Request, Response } from 'express'
import { HttpResponseAdapter } from '../http/response/http_response.adapter'

export function httpResponseMiddleware<T> (
  api: HttpResponseAdapterModel<T>,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (api instanceof HttpResponseAdapter) {
    res.status(api.code).json({ message: api.message, data: api.body })
  }
}
