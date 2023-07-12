import { InsertUserOutputPort } from '@auth/ports/port/insertuser_output.port'
import { UserRepositoryAdapter } from './user_repository.adapter'

const userRepositoryAdapter = new UserRepositoryAdapter()

const insertUserOutpuPort: InsertUserOutputPort = userRepositoryAdapter

export {
  insertUserOutpuPort
}
