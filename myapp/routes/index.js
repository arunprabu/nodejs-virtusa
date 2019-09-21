var express = require('express');
var router = express.Router(); //Setting up express router 

var temp = `<h1>Success</h1>`;
/* listening on routes */
/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(req.url);
  res.render('index', { title: 'Express', version: 4.16 });
  //res.end(temp);
  //res.json({ name: "Arun", phone: 2342432 });
});

module.exports = router;
