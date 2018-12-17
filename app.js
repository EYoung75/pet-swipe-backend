const express = require("express")
const app = express()
const port = process.env.PORT || 4444
const bodyParser = require("body-parser")
const cors = require("cors")

app.listen(port, () => console.log(`We are balling hard Port:${port}`))

app.use(cors())
app.use(bodyParser.json())