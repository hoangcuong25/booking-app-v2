import express from 'express'
import upload from '../middlewares/multer.js'
import { adminLoign } from '../controllers/adminController.js'
import { addDoctor } from '../controllers/docController.js'
import authAdmin from '../middlewares/authAdmin.js'

const adminRouter = express.Router()

adminRouter.post('/login', adminLoign)
adminRouter.post('/add-doctor', upload.single("image"), authAdmin, addDoctor)

export default adminRouter