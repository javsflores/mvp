const faker = require('faker');
const fs = require('fs');

const usersData = (count) => {
  const headerTemplate = 'userId|userName|userImg\n'
  const writeRecords = fs.createWriteStream('database/users.csv');
  writeRecords.write(headerTemplate, 'utf8');

  function writeTenMillionRecords(writer, encoding, callback) {
    let i = count;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const data = dataGenerator(id);
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
  write()
  }

  let dataGenerator = (id) => {
    const userName = faker.internet.userName();
    const userImg = faker.image.avatar();
    return `${id}|${userName}|${userImg}\n`;
  }

  let startingTime = new Date;
  writeTenMillionRecords(writeRecords, 'utf-8', () => {
    console.log('finished users data generation: ' + (new Date - startingTime)/1000 + " seconds")
    writeRecords.end();
  });
}

const restaurantsData = (count) => {
  const headerTemplate = 'restaurantId|restaurantName|restaurantLocation\n'
  const writeRecords = fs.createWriteStream('database/restaurants.csv');
  writeRecords.write(headerTemplate, 'utf8');

  function writeTenMillionRecords(writer, encoding, callback) {
    let i = count;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const data = dataGenerator(id);
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
  write()
  }

  let dataGenerator = (id) => {
    const restaurantName = faker.company.companyName();
    const restaurantLocation = faker.address.state();
    return `${id}|${restaurantName}|${restaurantLocation}\n`;
  }

  let startingTime = new Date;
  writeTenMillionRecords(writeRecords, 'utf-8', () => {
    console.log('finished restaurant data generation: ' + (new Date - startingTime)/1000 + " seconds")
    writeRecords.end();
  });
}

const postsData = (count) => {
  const headerTemplate = 'postId|postMessage|postPicture|postDate|restaurantId|postLikes|postComments|userId\n'
  const writeRecords = fs.createWriteStream('database/posts.csv');
  writeRecords.write(headerTemplate, 'utf8');

  function writeTenMillionRecords(writer, encoding, callback) {
    let i = count;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const data = dataGenerator(id);
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
  write()
  }

  let dataGenerator = (id) => {
    const postMessage = faker.lorem.paragraph();

    const postDate = faker.date.between('2020-05-01', '2020-11-04');
    const restaurantId = faker.random.number({min: 1, max:4000});
    const postLikes = faker.random.number({min: 0, max:56412});
    const postComments = faker.random.number({min: 0, max:1254});
    const userId = faker.random.number({min: 1, max:500});
    var photos = [
        "https://media.gettyimages.com/photos/close-up-of-fresh-flame-grilled-burgers-displayed-in-a-row-at-food-picture-id914886270?k=6&m=914886270&s=612x612&w=0&h=4gUa15EQ1pIxUqJDg0A8z5do1pDpHeETfm8GvaxjDF4=","https://media.gettyimages.com/photos/cropped-view-of-table-laid-with-crockery-and-fresh-homemade-food-picture-id1032617410?k=6&m=1032617410&s=612x612&w=0&h=rfnDGthnVQT1whMVsJ-rHK0G3vqempwE_2U1HSdPDMA=","https://media.gettyimages.com/photos/eating-tasty-food-favorite-meal-picture-id931464590?k=6&m=931464590&s=612x612&w=0&h=nqB6QF0fsmtiYAgb2rmBRixQowzXHe42KWSqMeIUB7g=","https://media.gettyimages.com/photos/professional-chef-at-work-picture-id935489342?k=6&m=935489342&s=612x612&w=0&h=avoBxqMcKr016rIXrQu683bQ9LiivbYhMUS8nTxbCos=","https://media.gettyimages.com/photos/grilled-chicken-breast-with-mediterranean-ingredients-sauce-picture-id1028119366?k=6&m=1028119366&s=612x612&w=0&h=7ZyzCfmujj2As0vXOUf9RIHrOWv1jBXro5maFjghDDc=","https://media.gettyimages.com/photos/two-fresh-salad-bowls-picture-id919666108?k=6&m=919666108&s=612x612&w=0&h=joLolauM1vUulZ-oo9Lhn53Xw5zRht_cvPDW8D_IJLM=","https://media.gettyimages.com/photos/sharing-food-picture-id825855446?k=6&m=825855446&s=612x612&w=0&h=ROCadkXAX3uQXVYipX3Iv3SElS_pvZTG5kuUH-ORulI=","https://media.gettyimages.com/photos/sprinkling-seasonings-from-high-up-picture-id1069793714?k=6&m=1069793714&s=612x612&w=0&h=A3zqo9pWScSeKj_6Mp9eS3vdW3ljjJj_718vtvlIgig=","https://media.gettyimages.com/photos/fresh-salad-with-boiled-eggs-picture-id981011078?k=6&m=981011078&s=612x612&w=0&h=kIY5f_8WhFEc9cle9aik9WveXbSfipux8EnhFliFr_8=","https://media.gettyimages.com/photos/eating-brunch-with-waffle-avocado-cucumber-salmon-and-poached-egg-picture-id986530194?k=6&m=986530194&s=612x612&w=0&h=Wt60uwefL1AdcXeAKhTcWCvc26lTBqGvLuHolMqL-L8=","https://media.gettyimages.com/photos/chef-in-restaurant-kitchen-at-stove-with-high-burning-flames-picture-id913931820?k=6&m=913931820&s=612x612&w=0&h=DDSPJpYyx8FzIQ08tibWzcPvLj3plLqMiLIabk0PnEg=","https://media.gettyimages.com/photos/woman-enjoying-delicious-burger-picture-id1055590912?k=6&m=1055590912&s=612x612&w=0&h=QgE7S1hDv1dG8mV8HvARN-HcjbuZ9yy0cd2nmuwd_cA=","https://media.gettyimages.com/photos/overhead-view-of-table-during-christmas-dinner-picture-id1177387587?k=6&m=1177387587&s=612x612&w=0&h=WeL_j-0YYfBHpCD9gq2t4_x6SeGebhmr0tqh8Ua6kDc=","https://media.gettyimages.com/photos/sharing-food-picture-id965148614?k=6&m=965148614&s=612x612&w=0&h=iiSCrFjf7fMMPH6290EUfQdgcVFIrXag6XZendvCf0o=","https://media.gettyimages.com/photos/traditional-holiday-stuffed-turkey-dinner-picture-id1031600638?k=6&m=1031600638&s=612x612&w=0&h=rHHiliWpZAn-pSVXa25kOoHc3pILgKqwSFwWsYHSN8I=","https://media.gettyimages.com/photos/sharing-food-picture-id1136787082?k=6&m=1136787082&s=612x612&w=0&h=aHzPSwieNCjehKy5_UjTl8YyoJfb5yt6AkdIzeFDh7Y=","https://media.gettyimages.com/photos/black-woman-biting-sandwich-picture-id707435321?k=6&m=707435321&s=612x612&w=0&h=fXjrH6xLYlR3nkjoHvxQj5ELeJM-Evj0qIakEpt3nZ0=","https://media.gettyimages.com/photos/autumnal-salad-with-fried-pumpkin-lentils-radicchio-pomegranate-seeds-picture-id1125586394?k=6&m=1125586394&s=612x612&w=0&h=v0K1m-FGBIwH0MweH28QGva-l4NyKxuK4EnSX1f9svA=","https://media.gettyimages.com/photos/man-talking-picture-of-burger-with-smartphone-picture-id1034355668?k=6&m=1034355668&s=612x612&w=0&h=72Ky5NNet6Of86LcVtjnj8XI-_t21ODv-iPy-s8js34=","https://media.gettyimages.com/photos/close-up-of-woman-enjoying-freshly-served-traditional-japanese-with-picture-id1040246740?k=6&m=1040246740&s=612x612&w=0&h=YUDpaSD56-SXRR4wmmzAf75rFP3LmRu7_0u3coQFzMo=","https://media.gettyimages.com/photos/holiday-turkey-dinner-picture-id836012728?k=6&m=836012728&s=612x612&w=0&h=Cg0RNCzO6dU8Q2_TmlQvsOWbMdAJydrBtChOGOqijO0=","https://media.gettyimages.com/photos/woman-having-food-at-restaurant-table-picture-id556561965?k=6&m=556561965&s=612x612&w=0&h=lo_aNqLiyDiX4daCke885Aypwg-DDBV4zh9FVsXIewI="
      ]
    const postPicture = photos[faker.random.number({min: 1, max:21})];
    return `${id}|${postMessage}|${postPicture}|${postDate}|${restaurantId}|${postLikes}|${postComments}|${userId}\n`;
  }

  let startingTime = new Date;
  writeTenMillionRecords(writeRecords, 'utf-8', () => {
    console.log('finished posts data generation: ' + (new Date - startingTime)/1000 + " seconds")
    writeRecords.end();
  });
}

usersData(500);
restaurantsData(4000);
postsData(15000);