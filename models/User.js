const { Schema, model } = require('mongoose');

//userSchema

const userSchema = new Schema(
    {
        username: {
            type: String,
            Unique: true,
            required: true,
            trim:true
        },
        //https://stackoverflow.com/questions/58898066/mongoose-unique-email-address-validation
        email:{
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
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },]
    }
    /*
    username

String
Unique
Required
Trimmed
email

String
Required
Unique
Must match a valid email address (look into Mongoose's matching validation)
thoughts

Array of _id values referencing the Thought model
friends

Array of _id values referencing the User model (self-reference)
*/
)



// Export User model
const User = model('user', userSchema);

module.exports = User;