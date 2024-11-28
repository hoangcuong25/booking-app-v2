import express from 'express'
import upload from '../middlewares/multer.js'
import { login, userRegister } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', login)

export default userRouter