const express = require("express")
const router = express.Router()
const queries = require("./queries_users_a.js")
const bcrypt = require("bcrypt")
const app = express()
const saltRounds = 12 



    
    router.get("/adoptee", (req,res) => {
       queries.listAll().then(adoptee => res.status(200).send(adoptee))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(adoptee => res.status(200).send(adoptee))
    })
    router.post("/", (req, res, next) => {
        const userNewPassword = brypt.hashSync(req.body.password, saltRounds)
        console.log(userNewPassword)
        const newUser = {
            user_name_a: req.body.user_name_a,
            user_name_a_pw: userNewPassword,
            email: req.body.contact_email,
            location_city: req.body.location_city
        }
        queries.createAdopteeUser(newUser).then(user => res.status(201).send(user[0]))
        .catch(next)
    })
    router.delete("/:id", (req, res) => {
        queries.deleteAdopteeUser(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updateAccounts(req.params.id, req.body).then(adoptee => res.status(200).send(adoptee))
    })


    app.use((req, res) => {
        res.status(404).json({error: {message: "User not found"}})
    })

    app.use((err, req, res, next) => {
        console.log("ERROR", err)
        const status = err.status || 500
        res.status(status).json({ error: err.message })
    })



    module.exports = router