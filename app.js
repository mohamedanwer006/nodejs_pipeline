const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const port = process.env.PORT || 3000;

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/app/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/app/about.html'));
});

router.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/app/contact.html'));
});

//add the router
app.use('/', router);

app.listen(port, () => {
    console.log(`Running at  http://localhost:${port}`)
  })
