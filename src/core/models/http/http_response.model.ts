export type HttpStatusResponse =
    'successRequest' | 'createdRequest' | 'forbiddenRequest' |
    'badRequest' | 'internalServerErrorRequest' | 'unAuthorizedRequest'

export const HttpStatusMap: Record<HttpStatusResponse, number> = {
  successRequest: 200,
  badRequest: 400,
  createdRequest: 201,
  forbiddenRequest: 403,
  internalServerErrorRequest: 500,
  unAuthorizedRequest: 401
}

export interface ResponseModel<T> {
  type: HttpStatusResponse
  message: string
  body: T
}

export interface HttpResponseAdapterModel<T> extends ResponseModel<T> {
  code: number
}
