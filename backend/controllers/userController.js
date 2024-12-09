import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'

// api register 
const userRegister = async (req, res) => {
    try {
        const { name, email, password, address } = req.body

        if (!name || !email || !password ) {
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

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Missing Field" })
        }

        const isUser = await userModel.findOne({ email })

        if (!isUser) {
            return res.status(400).json({ success: false, message: "User Not Found" })
        }

        const isMatch = await bcrypt.compare(password, isUser.password)

        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Wrong Password!" })
        }

        const token = jwt.sign({ id: isUser._id }, process.env.JWT_SECERT, { expiresIn: "72h" })

        return res.status(200).json({
            success: true,
            message: "Register Successfully",
            isUser,
            token
        })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api get profile user
const getProfile = async (req, res) => {
    try {
        const { userId } = req.body

        const user = await userModel.findOne({ userId })

        return res.status(200).json({ success: true, user })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api edit profile user 
const editProfile = async (req, res) => {
    try {
        const { userId, name, address, gender, dob, phone } = req.body
        const image = req?.file

        if (!name) {
            return res.status(400).json({ success: false, message: "Name is required." })
        }

        const user = await userModel.findOne({ userId })

        user.name = name

        if (address) user.address = address
        if (gender) user.gender = gender
        if (dob) user.dob = dob
        if (phone) user.phone = phone

        if (image) {
            const imageUpload = await cloudinary.uploader.upload(image.path, { resource_type: "image" })
            user.image = imageUpload.secure_url
        }

        await user.save();

        res.status(200).json({ success: true, message: "Profile updated successfully.", user });

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}


export { login, userRegister, getProfile, editProfile }