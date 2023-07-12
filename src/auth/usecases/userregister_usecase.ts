import { UserRegisterDTOModel } from '@auth/models/dto/userregister.dto.model'
import { UserRegisterRequestModel } from '@auth/models/request/userregister.request.model'
import { UserRegisterResponseModel } from '@auth/models/response/userregister.response.model'
import { UserRegisterInputPort } from '@auth/ports/input/userregister_input.port'
import { InsertUserOutputPort } from '@auth/ports/port/insertuser_output.port'

export class UserRegisterUsecase implements UserRegisterInputPort {
  constructor (
    private readonly port: InsertUserOutputPort
  ) {}

  async exec (data: UserRegisterRequestModel): Promise<UserRegisterResponseModel> {
    const newUser: UserRegisterDTOModel = {
      email: data.email,
      password: data.password,
      phoneNUmber: data.phoneNumber
    }

    await this.port.createUser(newUser)

    return {
      userId: 'adddd'
    }
  }
}
