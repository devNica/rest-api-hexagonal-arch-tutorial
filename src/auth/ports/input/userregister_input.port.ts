import { UserRegisterRequestModel } from '@auth/models/request/userregister.request.model'
import { UserRegisterResponseModel } from '@auth/models/response/userregister.response.model'

export interface UserRegisterInputPort {
  exec: (data: UserRegisterRequestModel) => Promise<UserRegisterResponseModel>
}
