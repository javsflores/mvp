const path = require('path');
const client = require('./dbConnection.js');

const startingTime = new Date;

const usersCopy = `\COPY users FROM '${path.join(__dirname + '/users.csv')}' DELIMITER '|' CSV HEADER;`;

const restaurantsCopy = `\COPY restaurants FROM '${path.join(__dirname + '/restaurants.csv')}' DELIMITER '|' CSV HEADER;`;

const postsCopy = `\COPY posts FROM '${path.join(__dirname + '/posts.csv')}' DELIMITER '|' CSV HEADER;`;

client.query(usersCopy, (err, res) => {
  if (err) {
    return console.error(err);
  }
  console.log('finished seeding users table: ' + (new Date - startingTime)/1000 + " seconds");
  client.query(restaurantsCopy, (err, res) => {
    if (err) {
      return console.error(err);
    }
    console.log('finished seeding restaurants table: ' + (new Date - startingTime)/1000 + " seconds");
    client.query(postsCopy, (err, res) => {
      if (err) {
        return console.error(err);
      }
      console.log('finished seeding posts table: ' + (new Date - startingTime)/1000 + " seconds");
      return client.end();
    })
  })
})