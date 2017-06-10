var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    app            = express();

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/client'));

require('./server/routes')(app);

var server = app.listen(3009, function() {
    var port = server.address().port;
    console.log('RNE Furniture web server listening on port %s', port);
});
