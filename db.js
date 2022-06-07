const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
    dialect:"postgres",
    host:process.env.POSTGRES_HOST,
    port:process.env.POSTGRES_PORT,
    database:process.env.POSTGRES_DB,
    username:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD
})