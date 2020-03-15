const userService = require('./service')
const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')

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
			message: "User created"
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
		if (!results) {
			return res.status(404).json({
				success: 0,
				message: "User not found!"
			})
		}
		res.status(200).json({
			success: 1,
			data: results
		})
	})
}

const updateUser = (req, res) => {
	const userData = req.body
	const id = req.params.id
	const salt = genSaltSync(10)
	userData.password = hashSync(userData.password, salt)
	userService.updateUser(id, userData, (err, results) => {
		if (err) {
			res.status(500).json({
				success: 0,
				message: 'Internal server error.'
			})
			return 
		}
		if (!results) {
			return res.status(404).json({
				success: 0,
				message: "User not found!"
			})
		}
		res.status(200).json({
			success: 1,
			message: 'User updated'
		})
	})
}
const deleteUser = (req, res) => {
	const id = req.params.id
	userService.deleteUser(id, (err, results) => {
		if (err) {
			res.status(500).json({
				success: 0,
				message: 'Internal server error.'
			})
			return 
		}
		if (!results) {
			return res.status(404).json({
				success: 0,
				message: "User not found!"
			})
		}
		res.status(200).json({
			success: 1,
			message: 'User deleted'
		})
	})
}

const login = (req, res) => {
	const userData = req.body
	userService.getUserByEmail(userData.email, (err, results) => {
		if (err) {
			res.status(500).json({
				success: 0,
				message: 'Internal server error.'
			})
			return 
		}
		if (!results) {
			return res.status(404).json({
				success: 0,
				message: "Invalid email or password!"
			})
		}

		const isValid = compareSync(userData.password, results.password)
		if (isValid) {
			results.password = undefined
			const token = sign({ uid: results.id, email: results.email, name: results.name }, 'secret_key', {
				expiresIn: '1h'
			})
			res.status(200).json({
				success: 1,
				message: 'logged in',
				token: token
			})
			return 
		}
		res.status(406).json({
			success: 0,
			message: 'Invalid email or password!'
		})
	})

}

module.exports = {
	createUser,
	getUserById,
	getUsers,
	updateUser,
	deleteUser,
	login,
}