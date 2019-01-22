const Sequelize = require('sequelize');
const db = new Sequelize(`postgres://localhost:5432/wikistack_practice`, {
  logging: false
  
});

//Once we complete project, we can put below on. because we do not want to have log all the time.
//also, dont forget to change 
// const db = new Sequelize(`postgres://localhost:5432/wikistack_practice`, {
//   logging: false
// });


const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull : false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull : false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull : false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull : false
  },
  email: {
    type: Sequelize.STRING,
    allowNull : false,
    validate : {
      isEmail: true
    }
  }
})


// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })


module.exports = {
  db,
  Page,
  User
}