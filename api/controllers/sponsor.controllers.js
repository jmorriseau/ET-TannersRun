var mongoose = require ('mongoose');
var Sponsor = mongoose.model('Sponsor');

module.exports.sponsorAddOne = function(req, res){
  console.log(req.body);
  Sponsor
    .create({
      nameOfCompany : req.body.nameOfCompany,
      addressLine1 : req.body.addressLine1,
      addressLine2 : req.body.addressLine2,
      city : req.body.city,
      state : req.body.state,
      zip : req.body.zip,
      phone : req.body.phone,
      email : req.body.email,
      sponsorLevel : req.body.sponsorLevel,
      amount : req.body.amount,
      sponsorParticipant : req.body.sponsorParticipant
    }, function(err, sponsor){
      if(err){
        console.log("Error creating Sponsor");
        res
          .status(404)
          .json(err);
      }
      else {
        console.log("Sponsor created", sponsor);
        res
          .status(201)
          .json(sponsor);
      }
    });
};

module.exports.sponsorsGetAll = function(req, res){

  Sponsor
    .find()
    .exec(function(err, sponsor){
      if(err){
        console.log("Error finding sponsors");
        res
          .status(500)
          .json(err);
      }
      else {
        console.log("Found sponsors ", sponsor.length);
        console.log("Sponsor: " + Sponsor);
        res
          .json(sponsor);
      }
    });

};
