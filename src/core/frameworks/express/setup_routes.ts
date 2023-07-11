import { HttpResponseAdapter } from '@core/adapters/primary/http/response/http_response.adapter'
import { APIModel } from '@core/models/api/api.model'
import { Application } from 'express'

export function setupRoutes (app: Application, api: APIModel[]): void {
  api.forEach(route => {
    app.use(route.path, route.controller)
  })

  app.use((_req, _res, next) => {
    next(HttpResponseAdapter.response({}, 'internalServerErrorRequest', 'Endpoint not found'))
  })
}
