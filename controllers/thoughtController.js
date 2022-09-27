const { User, Thought, Reaction } = require('../models');

const reactionCounter = async (thoughtId) =>
  Thought.aggregate([
    // only include the given student by using $match
    { $match: { _id: ObjectId(thoughtId) } },
    {
      $unwind: '$reactions',
    },
    {
      $group: {
        _id: ObjectId(thoughtId),
        reactionCount: { $count: '$reactions.reactionBody' },
      },
    },
  ]);


module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      // .then((thought) => res.json(thought))
      .then(async (thought) => {
        res.json(thought
        // console.log(thought)
        // res.json({
        //   thought,
        //   reactionCount: await reactionCount(req.params.thoughtId)
        // })
      )})
      .catch((err) => res.status(500).json(err));
  },


  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
          // : res.json({
          //   thought,
          //   reactionCount: await reactionCounter(req.params.thoughtId)
          // })
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          {
            $addToSet: {
              thoughts: thought._id
            }
          },
          { new: true }
        )
      })
      .then((user) => {
        !user ? res.status(404).json({ message: `Thought created, but no user with this id! ${req.params.userId}` })
          : res.json(user)
      })
      .catch((err) => res.status(500).json(err));
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true })
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  // Delete a thought 
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      // .then((thought) =>
      //   !thought
      //     ? res.status(404).json({ message: 'No thought with that ID' })
      //     : Application.deleteMany({ _id: { $in: thought.applications } })
      // )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },


  // addReaction 
  // /api/thoughts/:thoughtId/reactions
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then(() => res.status(200).json(req.body))
      .catch((err) => res.status(500).json(err));
  },

  // '/:thoughtId/reactions'
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.body.reactionId } } }
    )
      .then(() => res.status(200).json({ message: `Reaction removed!` }))
      .catch((err) => res.status(500).json(err));
  }

}; //module exports
