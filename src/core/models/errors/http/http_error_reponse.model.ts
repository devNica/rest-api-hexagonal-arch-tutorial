import { ResponseModel } from '@core/models/http/http_response.model'

export interface ErrorParams {
  type: string
  message: string
}

export type HttpErrorResponseModel = Omit<ResponseModel<ErrorParams>, 'body' | 'type'>
