

exports.up = function(knex, Promise) {
    return knex.schema.createTable("pet_info", (pets) => {
        pets.increments("id")
        pets.string("pet_name")
        pets.string("species")
        pets.string("pet_gender")
        pets.string("breed")
        pets.string("pet_about", 500)
        pets.string("pet_age")
        pets.boolean("house_trained")
        pets.string("preferences")
        pets.boolean("vaccinations")
        pets.boolean("spay_neuter")
        pets.string("coat_length")
        pets.string("pet_size")
        pets.string("pet_picture_url", 500)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("pet_info", (pets) => {
  
    })
  };