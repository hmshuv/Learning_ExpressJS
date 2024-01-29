const express = require('express');
const app = express();

app.get('/', (req, res)=>res.send('Hello World!!'));
app.get('/about', (req,res) => res.send('This is about page!'));
app.get('/contact',(req,res) => res.send('This is about page!'));
app.get('/books/:bookId', (req, res) => {
    res.send(req.params);
  });
// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });
app.listen(6900, () => console.log('Example app listening at port 6900!'));