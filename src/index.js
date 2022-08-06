const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const routing = require('./routes')

                const app = express();
const port = 3000

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// HTTP logger
app.use(morgan('tiny'))

// Template engine
app.engine('hbs', engine({ extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Routes
routing(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})