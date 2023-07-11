import { ResponseModel } from '@core/models/http/http_response.model'
import { HttpResponseOutputPort } from '@core/ports/output/http/http_response.port'

export class ResourceCreatedHttpPresenter<T> implements HttpResponseOutputPort<T> {
  async handleResponse (body: T, message: string): Promise<ResponseModel<T>> {
    return {
      type: 'createdRequest',
      body,
      message
    }
  }
}
