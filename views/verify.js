var assertion = require('../lib/assertion.js');

module.exports = function(server) {
    server.post({
        url: '/verify'
    }, function (req, res) {
        var email = assertion.verifyAssertion(req.params.assertion);
        if (email) {
            res.json(200, {
                status: 'okay',
                email: email,
                audience: req.params.audience,
                expires: new Date(2100, 12),
                issuer: "localhost"
            });
        } else {
            res.json(500, {
                status: 'failure'
            });
        }
    });
};