const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const db = require('./config/db');
const indexRouter = require('./IndexRouter');
const path = require('path');

db.connectDB();
indexRouter.combinedRoute(app);

app.get('/', (req, res) => {
    res.send('OK');
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Listening on port 5000'));

module.exports = app;