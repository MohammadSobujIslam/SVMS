const pool = require('../../config/db')

const createUser = (data, callback) => {
	pool.query(
		`insert into users(name, email, gender, password) values(?,?,?,?)`,
		[data.name, data.email, data.gender, data.password],
		(error, results, fields) => {
			if (error) {
				callback(error)
				return
			}
			return callback(null, results)
		 }
	)
}
const getUsers = ( callback) => {
	pool.query(
		`select id,name,email,gender from  users`,
		[],
		(error, results, fields) => {
			if (error) {
				callback(error)
				return
			}
			return callback(null, results)
		 }
	)
}
const getUserById = (id, callback) => {
	pool.query(
		`select id,name,email,gender from  users where id = ?`,
		[id],
		(error, results, fields) => {
			if (error) {
				callback(error)
				return
			}
			return callback(null, results[0])
		 }
	)
}

module.exports = {
	createUser,
	getUsers,
	getUserById
}