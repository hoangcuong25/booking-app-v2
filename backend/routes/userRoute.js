import express from 'express'
import upload from '../middlewares/multer.js'
import { login, userRegister, getProfile } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', login)
userRouter.get('/profile', authUser, getProfile)

export default userRouter