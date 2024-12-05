import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'
import bcrypt from 'bcrypt'
import doctorModel from '../models/doctorModel.js'
import validator from 'validator'


//api doctor login 
const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Missing Field" })
        }

        const isUser = await doctorModel.findOne({ email })

        if (!isUser) {
            return res.status(400).json({ success: false, message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, isUser.password)

        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Wrong password!" })
        }

        const dToken = jwt.sign({ id: isUser._id }, process.env.JWT_SECERT, { expiresIn: "72h" })

        res.status(200).json({ success: true, message: "Login successfully", dToken })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

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
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const image = req?.file

        if (!name || !email || !password || !image || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(400).json({ success: false, message: "Missing Field" })
        }

        const imageUpload = await cloudinary.uploader.upload(image.path, { resource_type: "image" })

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Email Invalid" })
        }

        const isDoctor = await doctorModel.findOne({ email })

        if (isDoctor) {
            return res.status(400).json({ success: false, message: "This Email Already Exist" })
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password Not Strong" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name: name,
            email: email,
            password: hashedPassword,
            image: imageUpload.secure_url,
            speciality: speciality,
            degree: degree,
            experience: experience,
            about: about,
            fees: fees,
            address: address,
        }

        const newDoctor = doctorModel(userData)

        await newDoctor.save()

        res.status(200).json({ success: true, message: "Add New Doctor Successfully", newDoctor })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api change available
const available = async (req, res) => {
    try {
        const { docId } = req.body

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

export { allDoc, addDoctor, login, available }