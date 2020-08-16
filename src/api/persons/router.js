const personController = require('./controller')

const router = require('express').Router()

router.get('/', personController.getPersons)
router.post('/', personController.createPerson)



module.exports = router