

exports.up = function(knex, Promise) {
    return knex.schema.createTable("pet_info", (users) => {
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("pet_info", (users) => {
  
    })
  };