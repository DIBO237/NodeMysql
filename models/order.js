const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db");

const Order = sequelize.define('Orders', {
    id:{
    type:Sequelize.INTEGER,
     autoIncrement:true,
     primaryKey:true,
     allowNull:true
    },
  // Model attributes are defined here
  firstName: {
    type: Sequelize.STRING(222),
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING(222)
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});


module.exports = Order;