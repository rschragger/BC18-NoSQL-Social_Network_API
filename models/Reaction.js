
const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },

        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username:{
          type:String,
          required:true
        },
        createdAt: {
            type: String,
            required: true,
            default: Date.now,
            get: (date) => {
                if (date) return date.toISOString();
            }
        },
      
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }

)


// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;