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

    app.get('/user', function (req, res) {
        let newUser = {
            login: 'Tom',
            password: '12345'
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
            users.find({login: "Tom"}).toArray(function (err, docs) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.send(docs);
            })
        });

    app.use('/static', express.static('public'));
}

module.exports = router;
