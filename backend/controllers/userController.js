import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'

// api register 
const userRegister = async (req, res) => {
    try {
        const { name, email, password, address } = req.body

        if (!name || !email || !password || !address) {
            return res.status(400).json({ success: false, message: "Missing Field" })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Email Invalid" })
        }

        const isUser = await userModel.findOne({ email })

        if (isUser) {
            return res.status(400).json({ success: false, message: "User Already Exist" })
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
            address: address
        }

        const newUser = userModel(userData)

        await newUser.save()

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECERT, { expiresIn: "72h" })

        return res.status(200).json({
            success: true,
            message: "Register Successfully",
            newUser,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api login
const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const isUser = userModel.findOne({ email })

        if (!isUser) {
            return res.status(400).json({ success: false, message: "User Not Found" })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

export { login, userRegister }