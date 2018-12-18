const db = require("./database-connection")

module.exports = {
    
    listAll() {
        return db("users_a")
    },
    createAdopteeUser(createAdoptee) {
        return db("users_a")
        .insert(createAdoptee)
        .returning("*")
    },
    deleteAdopteeUser(id) {
        return db("users_a")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("users_a").where("id", id)
    },
    updateAdopteeUser(id, adoptee) {
        return db("users_a")
          .where('id', id)
          .update(adoptee)
          .returning('*')
      }
}