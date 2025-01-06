const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})
UserSchema.statics.singup = async function (email, password) {
    if (!email, !password) {
        throw Error("All fildes are required.")

    }
    if (!validator.isEmail(email)) {
        throw Error("Not a proper Email");
    }
    if (password.length < 8) {
        throw Error("password is to short");

    }
    const found = await this.findOne({ email })
    if (found) {
        throw Error("account allready created")
    }
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)
    const user = await this.create({ email, password: hashedpassword })
    return user
}
UserSchema.statics.get_all_users= async function(){
    const all_users= await this.find({})
    return all_users
}

UserSchema.statics.login = async function (email, password) {
    if (!email, !password) {
        throw Error("All fildes are required.")

    }
    if (!validator.isEmail(email)) {
        throw Error("Not a proper Email");
    }
    const user = await this.findOne({ email })
    if (!user) {
        throw Error("account not found")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error("incorect Password")
    }
    return user
}


const UserModel = mongoose.model("User", UserSchema)
module.exports = UserModel

