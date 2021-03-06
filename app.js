const express = require("express")
const app = express()
const port = process.env.PORT || 4444
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())


const users_a = require("./users_a")
const users_b = require("./users_b")
const pet_info = require("./pet_info")

app.use("/users_a", users_a)
app.use("/users_b", users_b)
app.use("/pet_info", pet_info)

app.listen(port, () => console.log(`We are balling hard Port:${port}`))

// app.get("/", (req,res) => {
//    queries_users_a.listAll().then(users_a => res.json(users_a))
// })

