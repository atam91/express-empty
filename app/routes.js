const express = require('express');
const router = express.Router();

const indexController = require('./controllers/index');


router.get('/', indexController.index);
router.get('/resource', indexController.resource);


module.exports = router;
