var express = require('express');
var router = express.Router();

const loginController = require("../controllers/login.controller")

/* GET home page. */
router.post('/login', function(request, response) {
    const result = loginController.getLogin(
        request.body.username,
        request.body.password
    );        

    response.status(200).json({
        status: true,
        message: !result ? "Credentials invalid" : "Login successful",
        info: result
    })
});

module.exports = router;