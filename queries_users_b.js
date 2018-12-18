const db = require("./database-connection")

module.exports = {
    
    listAll() {
        return db("users_b")
    },
    createAdopteeUser(createAdoptee) {
        return db("users_b")
        .insert(createAdoptee)
        .returning("*")
    },
    deleteAdopteeUser(id) {
        return db("users_b")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("users_b").where("id", id)
    },
    updateAdopteeUser(id, adoptee) {
        return db("users_b")
          .where('id', id)
          .update(adoptee)
          .returning('*')
      }
}