const express = require('express');
const fs = require('fs');

let app = express();

app.get('/books', (req, res) => {
  var file = fs.readFile(process.argv[3], (err, data) => {
    if(err) res.sendStatus(500);

    try {
      books = JSON.parse(data);
    } catch(e) {
      res.sendStatus();
    }
    res.json(books);
  });
});


app.listen(process.argv[2]);
