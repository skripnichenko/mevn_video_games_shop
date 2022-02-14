require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const { routes } = require('./src/routes');

mongoose.connect(
  process.env.MONGO_CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
  }
);

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach(item => {
  app.use(`/${item}`, require(`./src/routes/${item}`))
})

const PORT = 3001;
http.createServer({}, app).listen(PORT);
console.log(`Server is running at ${PORT}`);

