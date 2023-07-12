/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { UserRegisterController } from '@auth/adapters/primary/controllers/userregister_controller.adapter'
import { insertUserOutpuPort } from '@auth/adapters/secondary/respositories'
import { UserRegisterResponseModel } from '@auth/models/response/userregister.response.model'
import { UserRegisterUsecase } from '@auth/usecases/userregister_usecase'
import { ResourceCreatedHttpPresenter } from '@core/adapters/primary/presenters/resource_created_http.presenter'

export const userRegisterFactory = () => {
  /** usecase instance */
  const usecase = new UserRegisterUsecase(
    insertUserOutpuPort
  )
  /** presenter instance */
  const presenter = new ResourceCreatedHttpPresenter<UserRegisterResponseModel>()

  const userRegisterController = new UserRegisterController(
    usecase,
    presenter
  )

  return {
    userRegisterController
  }
}
