/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HttpStatusResponse } from '@core/models/http/http_response.model'
import { HttpErrorAdapter } from './http_error.adapter'

export class RequestValidationErrorAdapter extends HttpErrorAdapter {
  constructor (
    public readonly message: string,
    public readonly type: HttpStatusResponse
  ) {
    super(message, type)
  }

  static handleError (message: string) {
    return new RequestValidationErrorAdapter(message, 'badRequest')
  }
}
