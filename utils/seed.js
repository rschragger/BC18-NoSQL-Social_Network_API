const connection = require('../config/connection');
const { User, Thought } = require('../models'); //,Reaction
const { getUserData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 15; i++) {
    const userData = getUserData(i);

    users.push({
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
     username: userData.username
      //thoughts - needs to have random thought IDs generated
      //friends
    });
  }

  await User.collection.insertMany(users);


  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
