const MongoClient = require('mongodb').MongoClient;
const express = require('express');

let db,users;

MongoClient.connect('mongodb://user:user123@ds115798.mlab.com:15798/heroku_5x9fs53r', function (err, database) {
if (err) {
    return console.log(err);
}

db = database.db("heroku_5x9fs53r");
users = db.collection('user');
})

const router = app => {

    app.post('/user', function (req, res) {
        console.log(req.body);
        let newUser = {
            login: req.body.login,
            password: req.body.password
        };
        users.insert(newUser, function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send('New user '+ newUser.login+ ' was added');
        })
    });


        app.get('/users', function(req, res) {
            users.find().toArray(function (err, docs) {
                if (err) {
                    return res.sendStatus(500);
                }
                res.send(docs);
            })
        });

    app.use('/static', express.static('public'));
}

module.exports = router;
