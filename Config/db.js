'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize('my_db', 'root', '', {
  host :'localhost',
  dialect : 'mysql',
  port : 3306

});
module.exports = sequelize;
