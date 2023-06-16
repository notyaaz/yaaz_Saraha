import express from "express"
import initApp from "./src/app.router.js"
import { configDotenv } from "dotenv"
import { sendEmail } from "./src/Services/SendEmail.js"
import connectDB from "./DB/connection.js"
configDotenv() 
const app = express()
const port = 3000

initApp(express,app)


connectDB().then(()=> {
    app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
})