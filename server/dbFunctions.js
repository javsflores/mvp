const client = require('../database/dbConnection.js');

const getAll = (location, callback) => {
  const query = `SELECT * FROM restaurants INNER JOIN posts ON restaurants.restaurantId = posts.restaurantId AND restaurants.restaurantLocation = '${location}' INNER JOIN users ON posts.userId = users.userId;`;

  client.query(query, (err, res) => {
    if (err) {
      console.log('could not get');
      return callback(err, null);
    }
    return callback(null, res);
  })
}

module.exports.getAll = getAll;