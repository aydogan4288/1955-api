/*jshint esversion: 6 */
console.log('inside of name.js');

var mongoose = require("mongoose");


var NameSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name must have a name"]}
});

mongoose.model('Name', NameSchema);
