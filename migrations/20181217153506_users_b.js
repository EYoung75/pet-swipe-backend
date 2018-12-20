
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_b", (users) => {
    users.increments("id")
    users.string("user_name_b")
    users.string("user_name_b_pw")
    users.foreign("pets_info_id").references("pet_info.id")
    users.string("location_city")
    users.string("location_lat")
    users.string("location_long")
    users.string("contact_email")
    users.string("pet_type")
    users.string("picture_url")
    users.string("about", 500)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users_b")
};
