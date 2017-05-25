var Sequelize = require('sequelize');
var db = require('../index.js');


module.exports = db.define('classes', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
