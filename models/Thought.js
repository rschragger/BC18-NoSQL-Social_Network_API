const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')
// const User = require('./User')

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

    // reaction: [reactionSchema],

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    if (this._doc.reactions.length <1) { return 0 }
    else {
      return this._doc.reactions.length;
    }

  })
  .set(function (len) {
    this.set(len);
  });
  

// Export Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;