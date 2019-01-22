
const express = require('express');
const morgan = require('morgan')
const bodyParser = require("body-parser");
const html = require("html-template-tag");
const path = require('path')
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './public')))

//inside views folder, layout and index are different from others.
//layout is a function accepting an argument. and argument is a content I would like to show on a page.
const layout = require('./views/layout')

app.get('/', (req, res, next) => {
  try {
    res.redirect('/wiki');
  } catch(error) {
    next(error)
  }
  
})

const wikiRouter = require("./routes/wiki")
const userRouter = require("./routes/user")

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);


module.exports = app;