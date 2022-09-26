const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  addReaction

} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);


// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

module.exports = router;


