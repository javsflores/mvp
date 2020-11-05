const { Client } = require('pg');
const credentials = require('./dbCredentials.js');

var client;

const finalizedCredentials = Object.assign({}, credentials.initial);
finalizedCredentials.database = "foodstagram";
client = new Client(finalizedCredentials);

client.connect((err, res) => {
  if (err) {
    return console.log('Connection failed. Error occurred:', err);
  }
  return console.log('Connected to database: foodstagram');
})

module.exports = client;
