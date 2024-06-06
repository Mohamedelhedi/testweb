const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('FREEPDB1', 'HR', 'oracle', {
    host: '127.0.0.1',
    dialect: 'oracle'
});

module.exports = sequelize;