module.exports = function(app) {
	app.all('/*', function(req, res, next) {
		if(req.headers['origin'] && app.get('config-allow-origin').indexOf(req.headers['origin']) > -1) {
			res.header('Access-Control-Allow-Origin', req.headers['origin'])
		}
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
		res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers'])
		
		next()
	})
}
