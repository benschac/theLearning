const express = require('express');
let app = express();

app.get('/search', (req, res) => {
  var id = req.query;
      console.log(id);
      res.send(id);
});

app.listen(process.argv[2])
