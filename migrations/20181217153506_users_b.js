
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_b", (users) => {
    users.increments("id")
    users.string("user_name")
    users.string("user_name_b_pw")
    users.string("location_lat")
    users.string("location_long")
    users.string("contact_email")
    users.string("pet_type")
    users.string("picture_url")
    users.string("about")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users_b")
};
