const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const chatController = require('../controllers/chat.controller.js')
const router = express.Router()

router.post('/',authMiddleware.authUser,chatController.createchat)
module.exports = router