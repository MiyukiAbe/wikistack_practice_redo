const express = require('express');
const router = express.Router();

//const layout = require('../views/layout')
//below is accessing to addPage property insied views object.
//const {addPage} = require('../views')
//const addPage = require('../views/addPage') works too.

//solution video is below
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views')

//localhost:3000/wiki/
router.get('/', (req, res, next) =>{
  try {
    res.send('go to GET /wiki/')
  } catch (error){
    next(error)
  }
})

router.post('/', (req, res, next) =>{
  try {
    res.send('go to POST /wiki/')
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

module.exports = router;