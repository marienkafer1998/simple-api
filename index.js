// index.js
const express = require('express');
const MongoClient    = require('mongodb').MongoClient;
const app = express();
// parse application/json
app.use(require('body-parser').json());
// register endpoints
require('./api')(app, {});

app.listen(3333, () => {
    console.log('server started!');
})