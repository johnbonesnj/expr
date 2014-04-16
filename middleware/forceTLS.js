// Allow only connections over TLS/HTTPS
// Use this middleware in a route
module.exports = function(req, res, next) {
	if(!req.secure) {
		res.send(400, 'This resource is accessible only via SSL')
	}
	else {
		// Force SSL using HSTS where supported
		res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
		next()
	}
}
