const express = require('express');

const router = express.Router();

//@route  GET api/posts/
//@desc   Test Posts Route
//@access Public
router.get('/', (req, res) => {
  res.send('Posts here');
});

module.exports = router;
