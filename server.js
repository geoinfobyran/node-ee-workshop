const express = require('express')
const app = express()

const eebild = require('./eebild')

app.get('/hello', (req, res) => res.send('hello world'))

app.get('/eebild', eebild)

app.listen(3000, () => console.log('Example app listening on port 3000'))