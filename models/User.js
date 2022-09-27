const { Schema, model } = require('mongoose');
// const Reaction = require('./Reaction');
// const Thought = require('./Thought');

//userSchema

const userSchema = new Schema(
  {
    username: {
      type: String,
      Unique: true,
      required: true,
      trim: true
    },
    // Added first and last names as it seems silly not to
    first_name: String,
    last_name: String,
    //https://stackoverflow.com/questions/58898066/mongoose-unique-email-address-validation
    email: {
      type: String,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please add a valid email address.',
      ],
      required: [true, 'Please enter Email Address'],
      unique: true,
      lowercase: true,
      dropDups: true
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },],
    // thoughts: [Thought],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    },]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
)

//a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  })
  .set(function (len) {
    this.set(len);
  });


// Export User model
const User = model('user', userSchema);

module.exports = User;