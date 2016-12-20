var express = require('express')
var app = express()

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.get('/home', function(req, res) {
  res.end('Hello World!')
})
app.listen(process.argv[2])
