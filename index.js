const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.route('/')
.get((req, res, next) => {
    res.status(200).send("You've made a GET request to the root!")
})
