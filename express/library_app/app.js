const express = require('express');
const app = express();


app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', (req, res) => {
  res.send('something here');
});

app.listen(3003);
