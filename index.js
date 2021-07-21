const express = require('express');
const donuts = require('./donuts.json');
const PORT = process.env.port || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  console.log('GET request for reviews');
  res.json(donuts);
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  console.log('POST request received');
  res.send('Its working');
});


// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/donuts', (req, res) => {
  // Your code here
  res.json(donuts);

});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
  console.log('POST request received, sending upvotes');
  console.log(req.body);
  const ratingList = [];
  for(let donut of donuts){
    ratingList.push({
      name: donut.name,
      rating: donut.rating
    });
  }
  res.json(ratingList);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
