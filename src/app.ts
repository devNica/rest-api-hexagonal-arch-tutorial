import 'reflect-metadata'
import 'source-map-support/register'
import 'module-alias/register'

import { HttpServerAdapter } from '@core/adapters/primary/express/http_server.adapter'
import authenticationRouter from '@auth/routes/authentication.router'

void main()

async function main (): Promise<void> {
  const httpServer = new HttpServerAdapter()
  httpServer.addController({
    path: '/auth',
    controller: authenticationRouter
  })
  await httpServer.start(8900)
}
