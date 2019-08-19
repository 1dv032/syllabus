'use strict';

const router = require('express').Router();

router.route('/')
    .post((request, response) => {
        response.status(201).send('OK');
      });

module.exports = router;
