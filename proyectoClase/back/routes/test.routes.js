var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
  response.json({
    status: true,
    message: "TODO ESTA OK"
  });
});
module.exports = router;
