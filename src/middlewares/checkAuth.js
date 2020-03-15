const { verify } = require('jsonwebtoken')

const checkAuth = (req, res, next) => {
	let token = req.get('authorization')
	if (token) {
		token = token.split(' ')[1]
		verify(token, 'secret_key', (err, decoded) => {
			if (err) {
				 return res.status(406).json({
					success: 0, 
					message: 'Invalid token.'
				})
			}
			req.currentUser = decoded
			next()
		})
	} else {
		res.status(401).json({
			success: 0, 
			message: 'Access denied! Unauthorized.'
		})
	}
}


module.exports = {
	checkAuth
}