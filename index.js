const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.route('/')
.get((req, res, next) => {
    res.status(200).send("You've made a GET request to the root!")
})

app.get('/:name/:message', function(req, res){
    res.send(`Hi ${req.params.name}, your message: ${req.params.message}`);
})

app.listen(8080, () => {
    console.log("Listening on port 8080")
})
