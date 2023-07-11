import { Application, json, urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

export function setupGlobalMiddleware (app: Application): void {
  app.use(json())
  app.use(urlencoded({ extended: true }))

  app.use(cors({ origin: '*' }))
  app.use(helmet())
  app.use(morgan('dev'))
}
