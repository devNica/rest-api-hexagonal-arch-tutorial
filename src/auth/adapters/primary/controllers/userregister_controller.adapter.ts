/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { UserRegisterRequestModel } from '@auth/models/request/userregister.request.model'
import { UserRegisterResponseModel } from '@auth/models/response/userregister.response.model'
import { UserRegisterUsecase } from '@auth/usecases/userregister_usecase'
import { RequestValidationErrorAdapter } from '@core/adapters/primary/errors/request_validation_error.adapter'
import { HttpRequestModel } from '@core/models/http/http_request.model'
import { ResponseModel } from '@core/models/http/http_response.model'
import { ControllerInputPort } from '@core/ports/input/controller/controller.port'
import { HttpResponseOutputPort } from '@core/ports/output/http/http_response.port'
import { ObjectKeyExist } from '@shared/validations/object_validation'

export class UserRegisterController implements ControllerInputPort<UserRegisterResponseModel | never> {
  constructor (
    private readonly usecase: UserRegisterUsecase,
    private readonly presenter: HttpResponseOutputPort<UserRegisterResponseModel>
  ) {}

  async handleRequest (request: HttpRequestModel<UserRegisterRequestModel>): Promise<ResponseModel<UserRegisterResponseModel>> | never {
    try {
      if (!ObjectKeyExist(request, 'body')) {
        throw RequestValidationErrorAdapter.handleError('Invalid body request')
      }

      const { email, password, phoneNumber } = request.body
      const userId = await this.usecase.exec({ email, password, phoneNumber })
      return await this.presenter.handleResponse(userId, 'User has been created')
    } catch (error) {
      throw RequestValidationErrorAdapter.handleError(String(error))
    }
  }
}
