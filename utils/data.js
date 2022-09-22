const { sensitiveHeaders } = require("http2");

const userData = [{
  "first_name": "Leonore",
  "last_name": "Listone",
  "email": "llistone1@cloudflare.com",
  "username": "llistone1"
}, {
  "first_name": "Niall",
  "last_name": "Speare",
  "email": "nspeare2@ow.ly",
  "username": "nspeare2"
}, {
  "first_name": "Byram",
  "last_name": "Abrahami",
  "email": "babrahami3@sun.com",
  "username": "babrahami3"
}, {
  "first_name": "Darci",
  "last_name": "Kubach",
  "email": "dkubach4@bluehost.com",
  "username": "dkubach4"
}, {
  "first_name": "Brandea",
  "last_name": "Breach",
  "email": "bbreach5@virginia.edu",
  "username": "bbreach5"
}, {
  "first_name": "Korie",
  "last_name": "Chidlow",
  "email": "kchidlow6@1688.com",
  "username": "kchidlow6"
}, {
  "first_name": "Orlando",
  "last_name": "Farrance",
  "email": "ofarrance7@e-recht24.de",
  "username": "ofarrance7"
}, {
  "first_name": "Codi",
  "last_name": "Smale",
  "email": "csmale8@umich.edu",
  "username": "csmale8"
}, {
  "first_name": "Diannne",
  "last_name": "Aggott",
  "email": "daggott9@flickr.com",
  "username": "daggott9"
}, {
  "first_name": "Neille",
  "last_name": "Linscott",
  "email": "nlinscotta@stumbleupon.com",
  "username": "nlinscotta"
}, {
  "first_name": "Teddie",
  "last_name": "Showl",
  "email": "tshowlb@mlb.com",
  "username": "tshowlb"
}, {
  "first_name": "Dorothee",
  "last_name": "Popham",
  "email": "dpophamc@smh.com.au",
  "username": "dpophamc"
}, {
  "first_name": "Kendra",
  "last_name": "Bonicelli",
  "email": "kbonicellid@mac.com",
  "username": "kbonicellid"
}, {
  "first_name": "Jordana",
  "last_name": "Adlem",
  "email": "jadleme@fastcompany.com",
  "username": "jadleme"
}, {
  "first_name": "Adam",
  "last_name": "Even",
  "email": "adam@eve.edu",
  "username": "adamEve1"
}];



// const users = [];

// Get a random item given an array
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
// const getRandomName = () =>
//   `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;



// Export the functions for use in seed.js
// module.exports = { getRandomName, getRandomApplications };
const getUserData = (index) => userData[index]

module.exports = { getUserData };