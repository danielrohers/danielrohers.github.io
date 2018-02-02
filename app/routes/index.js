const express = require('express');
const controller = require('../controllers/index');

const router = express.Router();

router
  .route('/')
  .get(controller.index);

router
  .route('/pagination')
  .get(controller.pagination);

module.exports = router;
