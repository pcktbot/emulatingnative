'use strict'
require('dotenv').config()
const fs = require('fs')
const express = require('express')

const path = require('path')
const app = express()
const server = require('http').Server(app)

server.listen(4201, () => {
  console.log('listening on *:' + server.address().port)
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  res.render('pages/index', {})
})


module.exports = app