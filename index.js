const express = require('express')
require('dotenv');

const app = express()

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Hello')
})

app.listen(process.env.PORT || 3000)