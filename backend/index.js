const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');


const mongoUri = 'mongodb+srv://Aravind:testpassword@cluster0.ulq7g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const app = express()

app.use(bodyParser.json());

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
})
mongoose.connection.on('error', (err) => {
  console.error('error connecting to mongo', err)
})

app.get('/', function(req, res) {
    res.sendFile("/home/nambi/my_projects/PrestoHacks/backend/public/website/index.html");
  });

const PORT = process.env.PORT || 4100;


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});