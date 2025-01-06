const mongoose = require("mongoose")

const todosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    complelted: {
        type: Boolean,
        default: false,
    }
})

const todoModel = mongoose.model("Todo", todosSchema)
module.exports = todoModel


