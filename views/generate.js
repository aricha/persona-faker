var assertion = require('../lib/assertion.js');

module.exports = function(server) {
    server.get({
        url: '/generate'
    }, function (req, res) {
        res.json(200, {
                assertion: assertion.generateAssertion(req.params.email)
            });
    });
};