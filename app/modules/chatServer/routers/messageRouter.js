'use strict';

var router  = require('express').Router();
var message = require('../handlers/message');

router.post('/', message.messages);
router.get('/', message.messages);

module.exports = router;

