var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./api/config'),
    routes = require('./api/routes/')
    port = process.env.PORT || 3000,
    Post = require('./api/models/posts');

// mongoose database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.db, {
    useMongoClient: true,
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


routes(app); //register the route


// Error handling
app.use(function (req, res) {
    res.status(404).send({url:req.originalUrl + ' not found'});
});


app.listen(port, function(){
    console.log('App is listening on port: '+port);
});

