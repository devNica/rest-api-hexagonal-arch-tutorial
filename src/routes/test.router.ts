import { Router } from 'express'

const testRouter = Router()

testRouter.get('/', (_req, res) => {
  try {
    res.status(200).json({ message: 'Server is Ok!' })
  } catch (error) {
    res.status(400).json({ error })
  }
})

export default testRouter
