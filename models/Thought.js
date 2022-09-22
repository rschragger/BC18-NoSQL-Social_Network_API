const { Schema, model } = require('mongoose');

//userSchema

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
        reactions: [reactionSchema],
    },

)

userSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length ;
  })
  .set(function (len) {
    this.set(len);
  });

// Export Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;