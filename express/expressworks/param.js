const express = require('express');
const crypto = require('crypto');

let app = express();

app.put('/message/:id', (req, res) => {
  var id = req.params.id;
  var str = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex');
      res.send(str);
});

app.listen(process.argv[2]);
