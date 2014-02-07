var settings = require('./settings_local.js');

var serverHTTP = require('./server_http');

[
    'generate',
    'verify'
].forEach(function(view) {
    require('./views/' + view)(serverHTTP);
});

var serverName = serverHTTP.name;

serverHTTP.listen(process.env.PORT || 9001, function() {
    console.log('%s HTTP server listening at %s', serverName, serverHTTP.url);
});
