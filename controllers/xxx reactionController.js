const { User, Thought, Reaction } = require('../models');

module.exports = {
  // Get all reactions
  getReaction(req, res) {
    Reaction.find()
      .then((reaction) => res.json(reaction))
      .catch((err) => res.status(500).json(err));
  },


  // Get a single reaction
  getSingleReaction(req, res) {
    Reaction.findOne({ _id: req.params.reactionId })
      .select('-__v')
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No reaction with that ID' })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new reaction
  createReaction(req, res) {
    Reaction.create(req.body)
    .then((reaction)=>{
    return User.findOneAndUpdate(
      { _id: req.body.userId },
      {
        $addToSet: {
          reactions: reaction._id
        }
      },
      {  new: true }
    )
  })
      .then((user) => {
        !user ? res.status(404).json({ message: `Reaction created, but no user with this id! ${req.params.userId}`} )
          : res.json(user)
      })
    .catch((err) => res.status(500).json(err));
},






  // Delete a reaction and associated apps
  // deleteReaction(req, res) {
  //   Reaction.findOneAndDelete({ _id: req.params.reactionId })
  //     .then((reaction) =>
  //       !reaction
  //         ? res.status(404).json({ message: 'No reaction with that ID' })
  //         : Application.deleteMany({ _id: { $in: reaction.applications } })
  //     )
  //     .then(() => res.json({ message: 'Reaction and associated apps deleted!' }))
  //     .catch((err) => res.status(500).json(err));
  // },
};
