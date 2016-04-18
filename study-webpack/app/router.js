var React = require('react');
var App = require('./App.js');
var AppState = require('./server/AppState.js');
var index = '<<!DOCTYPE html><html><head></head><body>{{component}}</body></html>';

app.get('/', function(req, res) {
	var componentHtml = React.renderToString(App({state: AppState}));
	var html = index.replace('{{component}}', componentHtml);
	res.type('html');
	res.send(html);
});