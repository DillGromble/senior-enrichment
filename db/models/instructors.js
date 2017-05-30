var Sequelize = require('sequelize');
var db = require('../index.js');
const Campuses = require('./campuses');

module.exports = db.define('instructors', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  defaultScope: {
    include: [
      { model: Campuses }
    ]
  }
});
