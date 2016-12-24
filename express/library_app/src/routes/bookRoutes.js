const express = require('express');
const app = express();

let bookRouter = express.Router();

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

app.use('/Books', bookRouter);
bookRouter.route('/')
          .get((req, res) => {
            res.render('bookListView', {
              title: 'Hello from Books!',
              nav: [
                {
                  Link:'/Books',
                  Text: 'Books'
                },
                {
                  Link:'/Authors',
                  Text: 'Authors'
                }
              ],
              books: books
            });
          });

bookRouter.route('/:id')
          .get((req, res) => {
            let id = req.params.id;
            res.render('bookView', {
              title: 'Hello from Books!',
              nav: [
                {
                  Link:'/Books',
                  Text: 'Books'
                },
                {
                  Link:'/Authors',
                  Text: 'Authors'
                }
              ],
              book: books[id]
            });
          });

module.exports = bookRouter;
