const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction')
const User = require('./User')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: String,
      required: true,
      default: Date.now,
      get: (date) => {
        if (date) return date.toISOString();
      }
    },
    username: {
      type: String,
      required: true,
    },
    /* username: {
      type: String,
      ref: 'user.username',
      get: (User) => { user.username},
      required: true
    },*/

    reactions: [Reaction],
  },

)

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  })
  .set(function (len) {
    this.set(len);
  });

// Export Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;