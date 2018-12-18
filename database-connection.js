const enviroment = process.env.NODE_EN || "development"
const config = require("./knexfile")
const configEnv = config[enviroment]
const knex = require("knex")
const connection = knex(configEnv)

module.exports = connection