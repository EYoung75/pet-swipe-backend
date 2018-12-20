
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_a", (users) => {
    users.increments("id")
    users.string("user_name_a")
    users.string("user_name_a_pw")
    users.foreign("pet_info_id").references("pet_info.id")
    users.string("location_city")
    users.string("location_lat")
    users.string("location_long")
    users.string("contact_email")
    users.string("picture_url", 500)
  }) 
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users_a")
}
