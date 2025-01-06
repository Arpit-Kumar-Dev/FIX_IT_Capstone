const TodoModel = require("../models/todo.models")



async function getalltodos(req, res) {

    const todos = await TodoModel.find()
    res.status(200).json(todos)

}
async function posttodo(req, res) {
    try {
        const todo = await TodoModel.create(req.body)
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json(`${error}`)
    }
}

async function getsingletodo(req, res) {
    const id = req.params.id

    try {
        const todo = await TodoModel.findOne({ _id: id })
        if (!todo) {
            res.status(404).json(`no todo found with ${id}`)
        } else {
            res.status(200).json(todo)
        }
    } catch (error) {
        res.status(400).json(`${error}`)

    }
}
async function updatesingletodo(req, res) {
    const id = req.params.id
    try {
        const todo = await TodoModel.findByIdAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })
        if (!todo) {
            res.json(`not find to do with _id:${id}`)
        }
        else {
            res.status(200).json(todo)

        }
    } catch (error) {
        res.status(400).json(`${error}`)
    }
}
async function deletetodo(req, res) {
    const id = req.params.id
    try {
        await TodoModel.deleteOne({ _id: id })
        res.status(200).json(`document deleted with _id: ${id}`)
    } catch (error) {
        res.json(`${error}`)
    }
}
module.exports = { getalltodos, posttodo, getsingletodo, updatesingletodo, deletetodo }