import { Application } from 'express'

export function setupProxy (app: Application): void {
  app.set('trust proxy', true)
  app.disabled('x-powered-by')
}
