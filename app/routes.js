const express = require('express');
const router = express.Router();
const logger = require('./utils/logger');

const indexController = require('./controllers/index');


router.get('/', indexController.index);
router.get('/resource', indexController.resource);


module.exports = router;


logger.debug('Routes init!!');
logger.info('Routes init!!');
logger.debug('Routes init!!');
