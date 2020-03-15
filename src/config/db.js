const { createPool } = require('mysql')

const pool = createPool({
	port: 3306,
	host: 'localhost',
	user: 'root',
	passwrod: '',
	database: 'svms',
	connectionLimit: 20
})

module.exports = pool