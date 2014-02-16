var serverHTTP = require('./server_http');
var db = require('./db');

[
    'generate',
    'verify'
].forEach(function(view) {
    require('./views/' + view)(serverHTTP);
});

var serverName = serverHTTP.name;

serverHTTP.listen(process.env.PORT || 9001, function() {
    console.log('%s HTTP server listening at %s', serverName, serverHTTP.url);

    if (process.env.DB_PREFILL) {
        var client = db.redis();
        client.publish('galaxy-db-prefill:persona-faker', 'ready', function() {
            client.end();
        });
    }
});
