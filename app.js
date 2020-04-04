const express = require('express');
const path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');

 const app = express();

//  app.use(bodyParser());

app.get('/',function(req,res) {
  res.sendFile('index.html',{root: path.join(__dirname,'./views')});
});

app.post('/Submit',function(req,res) {
  // res.sendFile('index.html',{root: path.join(__dirname,'./views')});

    res.end(JSON.stringify(req.body));
});

app.listen(11000);

