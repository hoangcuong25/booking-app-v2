import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'

import doctorModel from '../models/doctorModel.js'

// api get all doc 
const allDoc = async (req, res) => {
    try {
        const allDoc = await doctorModel.find()

        res.status(200).json({ success: true, allDoc })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api add doctor 
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, available, fees, address, dob } = req.body
        const image = body.file

        if (!name || !email || !password || !image || !speciality || !degree || !experience || !available || !fees || !address || !dob) {
            return res.status(400).json({ success: true, message: "Missing Field" })
        }



    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}


export { allDoc, addDoctor }