const express = require('express');

const router = express.Router();

//@route  GET api/profile/
//@desc   Test profile Route
//@access Public
router.get('/', (req, res) => {
  res.send('Profile here');
});

module.exports = router;
