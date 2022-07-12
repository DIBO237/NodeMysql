
const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('test', 'root', '', {
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
