function generateAssertion(email) {
    if (!email)
        return null;
    return new Buffer(email).toString('base64');
};
exports.generateAssertion = generateAssertion;

// shamelessly copied from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

function verifyAssertion(assertion) {
    var email = new Buffer(assertion, 'base64').toString('ascii');
    return (validateEmail(email) ? email : null);
};
exports.verifyAssertion = verifyAssertion;
