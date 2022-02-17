const express = require('express');
const data = require('./data/GetData.js')
const app = express();

app.get('/', (req,response) => {
    console.log("ok");
    response.json(data.content);
});

app.listen(8000, ()=>{
    console.log("server ok");
  });
