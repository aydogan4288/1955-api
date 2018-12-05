/*jshint esversion: 6 */
var mongoose = require('mongoose');
var Name = mongoose.model("Name");

class Names{
  getAll(req, res){
    Name.find({}, function(err, names){
      res.json({names: names});
    });
  }

  create(req, res){
    let name = new Name({name: req.params.name});
    name.save(function(err){
      res.json({ name: name});
    });

  }

  remove(req, res){
    var name = req.params.name;
    Name.remove({name: name}, function(err, name){
      res.json('Successfully deleted');
    });
  }
  getOne(req, res){
    var name = req.params.name;
      res.json({name:name});
  }
}


module.exports = new Names();
