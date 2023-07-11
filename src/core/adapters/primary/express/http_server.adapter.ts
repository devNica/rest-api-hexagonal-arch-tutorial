import { setupGlobalMiddleware } from '@core/frameworks/express/setup_global_middleware'
import { setupProxy } from '@core/frameworks/express/setup_proxy'
import { setupResponseMiddleware } from '@core/frameworks/express/setup_response_middleware'
import { setupRoutes } from '@core/frameworks/express/setup_routes'
import { APIModel } from '@core/models/api/api.model'
import express, { Express } from 'express'

export class HttpServerAdapter {
  private readonly app: Express
  private readonly controllers: APIModel[] = []

  constructor () {
    this.app = express()
  }

  public addController (ctrl: APIModel): void {
    this.controllers.push(ctrl)
  }

  public async start (serverPort: number): Promise<void> {
    setupProxy(this.app)
    setupGlobalMiddleware(this.app)
    setupRoutes(this.app, this.controllers)
    setupResponseMiddleware(this.app)
    this.app.listen(serverPort, () => console.log(`Server is running at port: ${String(serverPort)}`))
  }
}
