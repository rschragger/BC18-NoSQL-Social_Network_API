const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getThought).post(createThought);

// /api/users/:userId
router.route('/:thoughtId').get(getSingleThought);

module.exports = router;
