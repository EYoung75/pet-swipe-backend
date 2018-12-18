const enviroment = process.env.NODE_EN || "development"
const config = require("./knexfile.js")
const configEnv = config[enviroment]
const knex = require("knex")
const connection = knex(configEnv)

module.exports = connection