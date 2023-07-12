/* eslint-disable @typescript-eslint/no-misused-promises */
import { userRegisterFactory } from '@auth/factories/userregister_factory'
import { expressRouteAdapter } from '@core/adapters/primary/express/express_route.adapter'
import { Router } from 'express'

const authenticationRouter = Router()

const { userRegisterController } = userRegisterFactory()

authenticationRouter.post('/', expressRouteAdapter(userRegisterController))

export default authenticationRouter
