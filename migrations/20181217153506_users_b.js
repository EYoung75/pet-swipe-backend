
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_b", (users) => {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users_b", (users) => {

  })
};
