const express = require("express")
const { getalltodos, posttodo, getsingletodo, updatesingletodo, deletetodo } = require("../controllers/todos.controllers")
const router = express.Router()

//end points
// base url/api/v1/todos
// base url/api/v1/todos/:id  get post
// base url/api/v1/todos/:id  get patch delete

router.route("/").get(getalltodos).post(posttodo)

router.route("/:id").get(getsingletodo).put(updatesingletodo).patch(deletetodo)
module.exports = router 