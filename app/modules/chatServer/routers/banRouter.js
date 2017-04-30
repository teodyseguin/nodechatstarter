'use strict';

var router = require('express').Router();
var ban    = require('../handlers/ban');

router.get('/', ban.bans);
router.post('/', ban.bans);

module.exports = router;

