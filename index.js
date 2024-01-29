const express = require('express');
const app = express();

app.get('/', (req, res)=>res.send('Hello World!!'));
app.get('/about', (req,res) => res.send('This is about page!'));
app.get('/contact',(req,res) => res.send('This is about page!'));
app.listen(6900, () => console.log('Example app listening at port 6900!'));