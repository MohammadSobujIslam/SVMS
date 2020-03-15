const { createUser, getUserById, getUsers } = require('./controller')

const router = require('express').Router()

router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', getUserById)


module.exports = router