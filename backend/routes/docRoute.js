import express from 'express'
import upload from '../middlewares/multer.js'
import { allDoc, login } from '../controllers/docController.js'

const docRouter = express.Router()

docRouter.get('/all-doc', allDoc)
docRouter.post('/login', login)

export default docRouter