import 'reflect-metadata'
import 'source-map-support/register'
import 'module-alias/register'
import { HttpServerAdapter } from '@core/adapters/primary/express/http_server.adapter'
import testRouter from '../src/routes/test.router'

void main()

async function main (): Promise<void> {
  const httpServer = new HttpServerAdapter()
  httpServer.addController({
    path: '/test',
    controller: testRouter
  })
  await httpServer.start(8900)
}
