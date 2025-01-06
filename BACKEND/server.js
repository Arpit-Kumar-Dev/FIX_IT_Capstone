const express = require("express")
const app = express()
const { connectDB } = require("./DB/connect")
require("dotenv").config();
const port = process.env.PORT || 8000

const todosRouter = require("./routes/todo.routs")
const userRouter = require("./routes/users.routs")
app.use(express.json())
app.use("/api/v1/todos", todosRouter)
app.use("/api/v1/user", userRouter)

async function start() {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log("App is running on port 8000")
        })
    } catch (error) {
        console.log(error)
    }
}
start()

