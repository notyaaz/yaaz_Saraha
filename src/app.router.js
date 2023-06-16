import authRouter from "./Modules/auth/auth.router.js"
import messageRouter from "./Modules/message/message.router.js"
import userRouter from './Modules/user/user.router.js'

const initApp = (express, app) => {
    app.get("/", (req, res) => {
        res.send("hello babyy")
    })
    app.use(express.json())
    app.use("/auth", authRouter)
    app.use("/message", messageRouter)
    app.use("/user", userRouter)

    app.use("/*", (req,res)=>{res.json({message: "page not found"})})
}

export default initApp  