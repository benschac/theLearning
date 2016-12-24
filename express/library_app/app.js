const express = require('express');
const app = express();
const port = process.env.port || 5000;
let bookRouter = require('./src/routes/bookRoutes.js');


let books = [
  {
    title: "Art of the Deal",
    author: "Tony Schwartz",
    genre: "Fiction",
    read: false
  },
  {
    title: "Art of the Deal",
    author: "Tony Schwartz",
    genre: "Fiction",
    read: false
  },
  {
    title: "Art of the Deal",
    author: "Tony Schwartz",
    genre: "Fiction",
    read: false
  },
  {
    title: "Art of the Deal",
    author: "Tony Schwartz",
    genre: "Fiction",
    read: false
  }
];

app.use(express.static('public'));
app.use('/Books', bookRouter);
app.set('views','src/views');
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello from Render',
    nav: [
      {
        Link:'/Books',
        Text: 'Books'
      },
      {
        Link:'/Authors',
        Text: 'Authors'
      }
    ]
  });
});


app.listen(port, function() {
  console.log('Serving from port: ' + port);
});
