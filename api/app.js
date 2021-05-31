const { errorHandler } = "./http/exceptions/core/Error";
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors)

app.use(express.static(path.join(__dirname, 'static')))

// ROUTES
app.use('/', require('./routes/sample.route'))

app.use(errorHandler)

// app.use(pageNotFound)

module.exports = app