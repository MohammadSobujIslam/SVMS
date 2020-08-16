const pool = require('../../config/db')

const createPerson = (data, callback) => {
	pool.query(
		`insert into persons(firstName, lastName, age, address, phone, nid, birthday) values(?,?,?,?,?,?,?)`,
		[data.firstName, data.lastName, data.age, data.address, data.phone, data.nid, data.birthday],
		(error, results, fields) => {
			if (error) {
				callback(error)
				return
			}
			return callback(null, results)
		 }
	)
}
const getPersons = ( callback) => {
	pool.query(
		`select * from  persons`,
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
const getPersonById = (id, callback) => {
	pool.query(
		`select * from users where id = ?`,
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
	createPerson,
	getPersons,
	getPersonById,
}