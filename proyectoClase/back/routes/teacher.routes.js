var express = require('express');
var router = express.Router();


router.get('/list', function(request, response) {
    const result = teacherController.getList();
    response.status(200).json({
    data: result,
    status: true,
    message: "VIVA EL REAL MADRID",
  });
});

module.exports = router;
