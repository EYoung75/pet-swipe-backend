
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_a", (users) => {
    users.increments("id")
    users.integer("pet_info")
    users.string("location_city")
    users.string("location_lat")
    users.string("location_long")
    users.string("contact_email")
    users.string("picture_url")
  }) 
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users_a")
}
