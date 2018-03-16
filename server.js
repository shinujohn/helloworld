const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World again! ' + new Date()))

app.listen((process.env.PORT || 3000), () => console.log('Example app running!'))
