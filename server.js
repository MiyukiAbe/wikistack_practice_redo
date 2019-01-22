const http = require('http')
//right now, i only have one file inside models, so I dont need to specify .index.js
//when I export db inside ./models,,,, and I am not sure why it is convenient to wrap with {}....
const { db, Page, User } = require('./models');

const app = require('./app')
const server = http.createServer(app)


const PORT = 3000;
 
const init = async () => {
  //sync should happen before users connect to database???
  
  //If we sync one by one, you can do this.
  // await Page.sync({force: true})
  // await User.sync({force: true})
  
  //after you create table, if you would like to change table, you need to add {force: true}
  //await db.sync({force: true}). otherwise, table scheme will not be updated.
  //{force: true} will drop table (means delete everything!) and recreate which you dont wanna do it all the time.
  await db.sync()
  
  server.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
  });
}

init();