var express = require('express');
var router = express.Router();
const pool = require('../db/dbConfig');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/records',(request, response)=>{

  pool.query('select sfid,name from salesforce.contact')
  .then((queryResult) => {
    console.log('queryResult rpws'+JSON.stringify(queryResult.rows));
    response.send(queryResult.rows);
  })
  .catch((queryError) => {
    console.log('queryErro : '+queryError);
    response.send(queryError);
  })

});

module.exports = router;
