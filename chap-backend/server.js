const express = require('express');
const mongoose = require('mongoose');
const dbConfog = require('./config/secret');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
app.use(cookieParser());
app.use(logger('div'));

mongoose.Promise = global.Promise;
mongoose.connect(dbConfog.url, { useNewUrlParser: true });

const auth = require("./routes/authRoutes");
app.use('/api/chapapp', auth);
app.listen(3000, () => {
    console.log("run");
    
});
