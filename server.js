/*
  Server app for heroku (a trick to serve static HTML files).
*/

const express = require('express')
const favicon = require('express-favicon')
const path = require('path')
const port = process.env.PORT || 8080
const outDir = 'storybook-static'

const app = express()
app.use(favicon(path.join(__dirname, outDir, '/favicon.ico')))

//serve static files
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, outDir)))

// serve html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, outDir, 'index.html'))
})

app.listen(port)
console.log('Server listen on port ' + port)
