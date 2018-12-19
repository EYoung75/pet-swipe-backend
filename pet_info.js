const express = require("express")
const router = express.Router()
const queries = require("./queries_pet_info.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(pet => res.status(200).send(pet))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(pet => res.status(200).send(pet))
    })
    router.post("/", (req, res, next) => {
        queries.createPet(req.body).then(pet => res.status(201).send(pet))
    })
    router.delete("/:id", (req, res) => {
        queries.deletePet(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updatePet(req.params.id, req.body).then(pet => res.status(200).send(pet))
    })



    module.exports = router