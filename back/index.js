var express = require('express');
const routes = require('./routes/routes');
var app = express();
const bodyParser = require('body-parser');

var logger = require('morgan');
app.use(logger('dev'));

app.use(express.static('client/build'));

require('dotenv').config()
app.set('port', (process.env.PORT || 5000));

app.set('views', __dirname + '/public');

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

routes(app);

app.listen(app.get('port'), function() {
  console.log("Node app running at localhost:" + app.get('port'));
});

module.exports = app
