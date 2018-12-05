/*jshint esversion: 6 */
console.log('inside of routes.js');

var Names = require('../controllers/names');
// var Messages = require('../controllers/messages');
// var Comments = require('../controllers/comments');

module.exports = function (app){

app.get('/', Names.getAll);

app.get('/new/:name', Names.create);

app.get('/remove/:name', Names.remove);

app.get('/:name', Names.getOne);

// app.get("/", Messages.index);
//
// app.post("/message", Messages.create);
//
// app.post("/comment/:_id", Comments.create_comment);

};
