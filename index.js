'use strict'
require('dotenv').config()
const express = require('express')

const path = require('path')
const app = express()
const server = require('http').Server(app)

app.set('view engine', 'ejs')

app.get('/', (req, res, next) => {
  res.render('pages/index', {})
})