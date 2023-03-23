import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import { userRouter } from "./routes/users.js"

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/", userRouter)

app.use("/", (req, res) => {
    res.send("Welcome to SocialProfile API")
})

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))