var mongoose = require ('mongoose');
var Runner = mongoose.model('Runner');

module.exports.runnerAddOne = function(req, res){
  console.log(req.body);
  Runner
    .create({
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      email : req.body.email,
      gender : req.body.gender,
      birthday : req.body.birthday,
      phone : req.body.phone,
      addressOne : req.body.addressOne,
      addressTwo : req.body.addressTwo,
      city : req.body.city,
      state : req.body.state,
      zip : req.body.zip
    }, function(err, runner){
      if(err){
        console.log("Error creating Participant");
        res
          .status(404)
          .json(err);
      }
      else {
        console.log("Participant created", runner);
        res
          .status(201)
          .json(runner);
      }
    });
};

module.exports.runnersGetAll = function(req, res){

  Runner
    .find()
    .exec(function(err, runner){
      if(err){
        console.log("Error finding runners");
        res
          .status(500)
          .json(err);
      }
      else {
        console.log("Found runners ", runner.length);
        console.log("Runner: " + Runner);
        res
          .json(runner);
      }
    });

};
