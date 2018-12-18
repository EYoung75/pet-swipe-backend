const express = require("express")
const app = express()
const port = process.env.PORT || 4444
const bodyParser = require("body-parser")
const cors = require("cors")
const queries_users_a = require("./queries_users_a")

app.listen(port, () => console.log(`We are balling hard Port:${port}`))

app.get("/", (req,res) => {
   queries_users_a.listAll().then(users_a => res.json(users_a))
})

app.use(cors())
app.use(bodyParser.json())