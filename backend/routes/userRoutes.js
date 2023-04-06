const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/currentUser', protect, getUser)

module.exports = router