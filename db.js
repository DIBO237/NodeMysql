
const { Sequelize } = require('sequelize');
const db_name = "test"
const username = "root"
const password = ""

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(db_name, username, password, {
    dialect: 'mysql',
    dialectOptions: {
        host:"localhost"
      // Your mysql2 options here
    }
  })

try {
    sequelize.authenticate()
    
    console.log('Connection has been established successfully.');
    //sequelize.sync().then(data => console.log(data)).catch(err => console.log(err))

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


  module.exports = sequelize;
