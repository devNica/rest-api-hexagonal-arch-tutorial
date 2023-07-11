import { httpResponseMiddleware } from '@core/adapters/primary/middlewares/http_response_middleware'
import { Application } from 'express'

export function setupResponseMiddleware (app: Application): void {
  app.use(httpResponseMiddleware)
}
