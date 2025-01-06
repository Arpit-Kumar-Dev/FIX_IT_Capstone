const { use } = require("react")
const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
async function singupUser(req, res) {

    const { email, password } = req.body
    try {
        // const user = await User.create({ email, password })
        const user = await User.singup(email, password)
        const token = createToken(user._id)
        console.log(token)
        res.status(200).json({ email: user.email, token: token })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

async function createToken(id) {
    return jwt.sign({ _id: id }, process.env.SECRET)
}
async function loginuser(req, res) {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        const token = await createToken(user._id)
        res.status(201).json({ email, token: token })
    } catch (error) {
        res.status(400).json(error.message)
    }

}
async function Get_all_users(req, res) {
    const users = await User.get_all_users()
    res.status(200).json(users)
}

module.exports = { singupUser, loginuser,Get_all_users }