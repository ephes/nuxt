const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/hello', (req, res) => {
  res.json({ data: 'hello world' })
})

module.exports = app
