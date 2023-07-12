import { UserRegisterDTOModel } from '@auth/models/dto/userregister.dto.model'
import { InsertUserOutputPort } from '@auth/ports/port/insertuser_output.port'

export class UserRepositoryAdapter implements InsertUserOutputPort {
  async createUser (newUser: UserRegisterDTOModel): Promise<void> {
    console.log(newUser)
  }
}
