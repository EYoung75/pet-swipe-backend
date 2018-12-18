const db = require("./database-connection")

module.exports = {
    
    listAll() {
        return db("pet_info")
    },
    createPet(createPet) {
        return db("pet_info")
        .insert(createPet)
        .returning("*")
    },
    deletePet(id) {
        return db("pet_info")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("pet_info").where("id", id)
    },
    updatePet(id, pet) {
        return db("pet_info")
          .where('id', id)
          .update(pet)
          .returning('*')
      }
}