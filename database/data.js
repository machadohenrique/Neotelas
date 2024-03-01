const Sequelize = require('sequelize');

const connection = new Sequelize('neotelas', 'root', 'senhaaaaDoSeuBanco', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;