const express = require('express');
const app = express();

let path = __dirname + '/views/'

let router = express.Router();

app.use('/',router)

router.get('/',function(req,res) {
  res.sendFile(path+'index.html')
})

app.listen(11000);

