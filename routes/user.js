const express = require('express');
const router = express.Router();


const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views')
const {Page, User} = require('../models')


router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users))
  } catch (error){
    next(error)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id : req.params.userId
      }
    });
  
    const posts = await Page.findAll({
      where: {
        authorId: req.params.userId
      }
    })
  
    res.send(userPages(user, posts))
  } catch (error){
    next(error)
  }
})
module.exports = router;