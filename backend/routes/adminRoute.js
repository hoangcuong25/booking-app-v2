import express from 'express'
import upload from '../middlewares/multer.js'
import { adminLoign } from '../controllers/adminController.js'

const adminRouter = express.Router()

adminRouter.post('/login', adminLoign)

export default adminRouter