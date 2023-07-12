import { UserRegisterDTOModel } from '@auth/models/dto/userregister.dto.model'

export interface InsertUserOutputPort {
  createUser: (newUser: UserRegisterDTOModel) => Promise<void>
}
