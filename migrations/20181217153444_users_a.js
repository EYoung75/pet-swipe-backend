
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_a", (users) => {
    users.increments("id")
    users.string("user_name_a").unique()
    users.string("user_name_a_pw")
    users.string("location_city")
    users.string("location_lat")
    users.string("location_long")
    users.string("contact_email").unique()
    users.string("picture_url", 500)
  }) 
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users_a")
}
