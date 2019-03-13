const mysql = require('mysql2');
const Sequelize = require('sequelize');

const connection = new Sequelize('chtr', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

connection.authenticate()
  .then(() => {
    console.log('Database connection successfully authenticated.');
  })
  .catch((err) => {
    console.error('Error authenticating database connection.', err);
  });

  module.exports = {
    connection
  };