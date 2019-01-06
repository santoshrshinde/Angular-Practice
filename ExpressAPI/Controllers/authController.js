var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt    = require('jsonwebtoken');
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
var user = require('./../Models/user');

router.post('/', function (req, res) {
    user.findOne({
        name: req.body.name
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else if (user) {
            if (user.password != req.body.password) {
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password.'
                });
            } else {
                const payload = {
                    admin: user.name
                };
                var token = jwt.sign(payload, 'iloveyoupriya', {
                    expiresInMinutes: 300
                });
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }

    });
});
module.exports = router;