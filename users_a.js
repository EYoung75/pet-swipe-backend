const express = require("express")
const router = express.Router()
const queries = require("./queries_users_a.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(adoptee => res.status(200).send(adoptee))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(adoptee => res.status(200).send(adoptee))
    })
    router.post("/", (req, res, next) => {
        queries.createAdopteeUser(req.body).then(adoptee => res.status(201).send(adoptee))
    })
    router.delete("/:id", (req, res) => {
        queries.deleteAdopteeUser(req.params.id).then(adoptee => res.status(204).send(adoptee))
    })
    router.put("/:id", (req, res) => {
        queries.updateAccounts(req.params.id, req.body).then(adoptee => res.status(200).send(adoptee))
    })



    module.exports = router