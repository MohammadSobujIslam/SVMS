const personService = require('./service')

const createPerson = (req, res) => {
	const personData = req.body
	personService.createPerson(personData, (err, results) => {
		if (err) {
			res.status(500).json({
				success: false,
				message: 'Internal server error.'
			})
			return 
		}
		res.status(201).json({
			success: true,
			message: "Person created"
		})
	})
}
const getPersons = (req, res) => {
	personService.getPersons((err, results) => {
		if (err) {
			res.status(500).json({
				success: false,
				message: 'Internal server error.'
			})
			return 
		}
		res.status(200).json({
			success: true,
			data: results
		})
	})
}
const getPersonById = (req, res) => {
	const id = req.params.id
	personService.getPersonById(id, (err, results) => {
		if (err) {
			res.status(500).json({
				success: false,
				message: 'Internal server error.'
			})
			return 
		}
		if (!results) {
			return res.status(404).json({
				success: false,
				message: "Person not found!"
			})
		}
		res.status(200).json({
			success: true,
			data: results
		})
	})
}

module.exports = {
	createPerson,
	getPersonById,
	getPersons
}