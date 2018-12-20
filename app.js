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

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(404).send('Something broke!')
})

app.use("/users_a", users_a)
app.use("/users_b", users_b)
app.use("/pet_info", pet_info)

app.listen(port, () => console.log(`We are balling hard Port:${port}`))

app.get('/', (req, res, next) => {
    res.send('Lamb is Lyfe.... Testify !!!')
  })

  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
