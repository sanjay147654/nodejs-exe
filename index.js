const express = require('express');
const app = express();

app.get('/', (req,res) => {

   console.log('Got a request at /')

   res.setHeader('type','text/html')

   res.send('<h1>Hello from sanjay</h1>')

})

app.listen('3000');