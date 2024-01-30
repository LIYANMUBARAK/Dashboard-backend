const express = require('express')
const server = express()
const router = express.Router()
const { sample } = require('../controller/controller');

router.get('/login',sample)

module.exports = router