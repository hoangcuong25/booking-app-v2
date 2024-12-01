import jwt from 'jsonwebtoken'

// api admin login
const adminLoign = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email !== process.env.AMDIN_EMAIL || password !== process.env.AMDIN_PASSORD) {
            return res.status(400).json({ success: true, message: "Wrong email or password" })
        }

        const token = jwt.sign({}, process.env.JWT_SECERT, { expiresIn: "72h" })

        res.status(200).json({ success: true, message: "Login successfully", token })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

export {adminLoign}