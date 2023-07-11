import { ControllerInputPort } from '@core/ports/input/controller/controller.port'
import { NextFunction, Request, Response } from 'express'
import { HttpResponseAdapter } from '../http/response/http_response.adapter'
import { HttpErrorAdapter } from '../errors/http_error.adapter'

export function expressRouteAdapter<T> (controller: ControllerInputPort<T>) {
  return async (request: Request, _response: Response, next: NextFunction) => {
    return await Promise.resolve(
      controller.handleRequest({
        body: request.body,
        params: request.params,
        query: request.query,
        headers: request.headers
      }).then(ctrl => {
        next(HttpResponseAdapter.response(ctrl.body, ctrl.type, ctrl.message))
      }).catch((error: HttpErrorAdapter) => {
        next(HttpResponseAdapter.response({}, error.type, error.message))
      })
    )
  }
}
