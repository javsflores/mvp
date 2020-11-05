const pgtools = require("pgtools");
const { Client } = require('pg');
const credentials = require('./dbCredentials.js');

var client;

const createConnect = () => {
  const finalizedCredentials = Object.assign({}, credentials.initial);
  finalizedCredentials.database = "foodstagram";
  client = new Client(finalizedCredentials);

  client.connect((err, res) => {
    if (err) {
      return pgtools.createdb(credentials.initial, "foodstagram", function(err, res) {
        if (err) {
          console.log('error occurred:', err)
          process.exit(-1);
        }
      }).then((res) => {
        createConnect();
      })
    }
    console.log('Database successfully created!');
    return createTables();
  })
}

const createTables = () => {
  let postsQuery = `
    CREATE TABLE IF NOT EXISTS posts (
      postId SERIAL PRIMARY KEY,
      postMessage TEXT,
      postPicture TEXT,
      postDate TEXT,
      restaurantId INT,
      postLikes INT,
      postComments INT,
      userId INT,
      FOREIGN KEY (restaurantId)
        REFERENCES restaurants (restaurantId),
      FOREIGN KEY (userId)
        REFERENCES users (userId)
    );
  `;

  let restaurantsQuery = `
    CREATE TABLE IF NOT EXISTS restaurants (
      restaurantId SERIAL PRIMARY KEY,
      restaurantName TEXT,
      restaurantLocation TEXT
    );
  `;

  let usersQuery = `
    CREATE TABLE IF NOT EXISTS users (
      userId SERIAL PRIMARY KEY,
      userName TEXT,
      userImg TEXT
    );
  `;

  client.query(usersQuery, (err, res) => {
    if (err) {
        console.error('Could not create users table', err);
        return;
    }
    console.log('Users table successfully created!');
    client.query(restaurantsQuery, (err, res) => {
      if (err) {
          console.error('Could not create restaurants table', err);
          return;
      }
      console.log('Restaurants table successfully created!');
      client.query(postsQuery, (err, res) => {
        if (err) {
            console.error('Could not create users table', err);
            return;
        }
        console.log('Posts table successfully created!');
        return client.end();
      });
    });
  });
}

createConnect();
