const express = require('express');
const app = express();

app.get('/', (req, res)=>res.send('Hello World!!'));
app.listen(6900, () => console.log('Example app listening at port 6900!'));