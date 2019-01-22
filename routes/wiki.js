const express = require('express');
const router = express.Router();

//const layout = require('../views/layout')
//below is accessing to addPage property insied views object.
//const {addPage} = require('../views')
//const addPage = require('../views/addPage') works too.

//solution video is below
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views')

const {Page, User} = require('../models')
 
//localhost:3000/wiki/
router.get('/', async (req, res, next) =>{
  try {
    const pages = await Page.findAll();
    res.send(main(pages))
  } catch (error){
    next(error)
  }
})

router.post('/', async (req, res, next) =>{
  try {
  //const [user, wasCreated] = await User.findOrCreate({....})
  //already createing new user
  const page = new Page(req.body);
    const [user, wasCreated] = await User.findOrCreate(
      {
        where: {
          name: req.body.name,
          email : req.body.email
        }
      })
  
  //const page = await Page.create(req.body);
  //capturing Page content
  // const page = new Page ({
  //   title: req.body.title,
  //   content: req.body.content
  // })
  await page.save()
  //when we create new post, I am storing user as page's authorID
    page.setAuthor(user)
    res.redirect(`/wiki/${page.slug}`)
  } catch (error){
    next(error)
  }
})

//localhost:3000/wiki/add
router.get('/add', (req, res, next) =>{
  try {
    res.send(addPage())
  } catch (error){
    next(error)
  }
})

router.get('/:slug', async (req,res,next)=>{
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    
    const author = await page.getAuthor();
    res.send(wikiPage(page, author))
  } catch (error){ next(error)}
  });

module.exports = router;