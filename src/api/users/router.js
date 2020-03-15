const userController = require('./controller')
const {checkAuth} = require('../../middlewares/checkAuth')

const router = require('express').Router()

router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.get('/:id', userController.getUserById)
router.patch('/:id', [checkAuth], userController.updateUser)
router.delete('/:id', [checkAuth], userController.deleteUser)
router.post('/login', userController.login)


module.exports = router