const express = require('express');
const router = express.Router();

const imagesRouter = require('./images');
router.use('/images', imagesRouter);

module.exports = router;
