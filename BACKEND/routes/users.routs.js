const express = require("express")
// const { getalltodos, posttodo, getsingletodo, updatesingletodo, deletetodo } = require("../controilers/todos.controllers")
const { Get_all_users,singupUser, loginuser } = require("../controllers/User.controllers")


const router = express.Router()

//end points
// base url/api/v1/todos
// base url/api/v1/todos/:id  get post
// base url/api/v1/todos/:id  get patch delete

router.route("/signup").post(singupUser)
router.route("/login").post(loginuser)
router.route("/all_users").get(Get_all_users)

module.exports = router 