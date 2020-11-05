const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const db = require('./dbFunctions.js')

app.use('/', express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/hello', (req, res) => {
  res.send('Hello World!');
})

app.get('/api/nearByRestaurants', (req, res) => {
  console.log(req.query)
  db.getAll(req.query.location, (err, response) => {
    if (err) {
      console.log('get request failed');
      return res.status(404).send(err);
    }
    console.log('get request successful');
    return res.status(200).send(response);
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

// SELECT * FROM restaurants INNER JOIN posts ON restaurants.restaurantId = posts.restaurantId AND restaurants.restaurantId = 684;

// SELECT * FROM restaurants INNER JOIN posts ON restaurants.restaurantId = posts.restaurantId AND restaurants.restaurantLocation = 'Utah' INNER JOIN users ON posts.userId = users.userId;