'use strict';

const router = require('express').Router();

router.route('/')
    .get((request, response) => {
        let data = [{'message': 'Hello from A'}, {'message': 'Hello from B'}];
        response.status(200).send(data);
      });

module.exports = router;
