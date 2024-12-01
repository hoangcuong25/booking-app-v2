import express from 'express'
import upload from '../middlewares/multer.js'
import { allDoc } from '../controllers/docController.js'

const docRouter = express.Router()

docRouter.get('/all-doc', allDoc)

export default docRouter