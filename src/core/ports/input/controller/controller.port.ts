import { HttpRequestModel } from '@core/models/http/http_request.model'
import { ResponseModel } from '@core/models/http/http_response.model'

export interface ControllerInputPort<T=unknown> {
  handleRequest: (request: HttpRequestModel) => Promise<ResponseModel<T>>
}
