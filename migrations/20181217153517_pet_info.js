

exports.up = function(knex, Promise) {
    return knex.schema.createTable("pet_info", (users) => {
        users.increments("id")
        users.string("pet_name")
        users.string("species")
        users.string("pet_gender")
        users.string("breed")
        users.string("pet_about")
        users.string("pet_age")
        users.string("house_trained")
        users.string("perfers_house_without")
        users.string("vacinations")
        users.string("spay_neuter")
        users.string("coat_length")
        users.string("pet_size")
        users.string("pet_picture_url")
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("pet_info", (users) => {
  
    })
  };