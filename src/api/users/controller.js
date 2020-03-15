const userService = require('./service')
const { genSaltSync, hashSync} = require('bcrypt')

const createUser = (req, res) => {
	const userData = req.body
	const salt = genSaltSync(10)
	userData.password = hashSync(userData.password, salt)
	userService.createUser(userData, (err, results) => {
		if (err) {
			res.status(500).json({
				success: 0,
				message: 'Internal server error.'
			})
			return 
		}
		res.status(201).json({
			success: 1,
			data: results
		})
	})
}
const getUsers = (req, res) => {
	userService.getUsers((err, results) => {
		if (err) {
			res.status(500).json({
				success: 0,
				message: 'Internal server error.'
			})
			return 
		}
		res.status(200).json({
			success: 1,
			data: results
		})
	})
}
const getUserById = (req, res) => {
	const id = req.params.id
	userService.getUserById(id, (err, results) => {
		if (err) {
			res.status(500).json({
				success: 0,
				message: 'Internal server error.'
			})
			return 
		}
		res.status(200).json({
			success: 1,
			data: results
		})
	})
}

module.exports = {
	createUser,
	getUserById,
	getUsers
}