import { ResponseModel } from '@core/models/http/http_response.model'

export interface HttpResponseOutputPort <T> {
  handleResponse: (body: T, message: string) => Promise<ResponseModel<T>>
}
