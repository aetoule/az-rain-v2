require('dotenv').config();
const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const controller = require('./controller');
const axios = require('axios');

// var nodemailer = require('nodemailer');
// const creds = require('./config.js');

// heroku db: evening-journey-82314

const app = express();
// app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('database is 👋');
}).catch(error => {
    console.log('-------------- database issue', error);
});

app.get('/api/cats', controller.getCats);
app.post('/api/cats/', controller.addCat);

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} `);
});
