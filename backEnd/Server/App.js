// dotenv
require('dotenv').config();

// Express
const express = require("express");
const app = express();

//DataBase Connection:
const dataBaseConnection = require('./Config/database');

//passport
const passport = require('passport');
// morgan
const logger = require('morgan');
// body-parser
const parser = require('body-parser');

//Route
const apiReq = require('./Route/Api');


// Middlewares



// Middlewares
app.use(logger('ok'));
app.use(parser.json());
app.use(parser.urlencoded({extended : true}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


//Route And Route Error Handling
app.use('/api/v1/', apiReq);

// Errors
app.use((req,res,next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
}); 

app.use((err,req,res,next) => {
const status = err.status || 500;
const error= err.message || "Error Proccesing";
res.status(status).send({error});
}); 



//exporting
module.exports = app;












