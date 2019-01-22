const Sequelize = require('sequelize');
const db = new Sequelize(`postgres://localhost:5432/wikistack_practice`, {
  logging: false
  
});

//Once we complete project, we can put below on. because we do not want to have log all the time.
//also, dont forget to change 
// const db = new Sequelize(`postgres://localhost:5432/wikistack_practice`, {
//   logging: false
// });

function generateSlug (title) {
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

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

//not sure which 'page' this is talking about... wiki page's page?
Page.beforeValidate((page)=>{
  if (!page.slug) {
    page.slug = generateSlug(page.title)
  }
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

Page.belongsTo(User, {as: 'author'});
User.hasMany(Page, {foreignKey: 'authorId'})
// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })


module.exports = {
  db,
  Page,
  User
}