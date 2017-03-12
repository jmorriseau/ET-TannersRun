var mongoose = require ('mongoose');
var Contact = mongoose.model('Contact');

module.exports.contactAddOne = function(req, res){
  Contact
    .create({
      name : req.body.name,
      email : req.body.email,
      subject : req.body.subject,
      message : req.body.message
    }, function(err, contact){
      if(err){
        console.log("Error creating Contact");
        res
          .status(404)
          .json(err);
      }
      else {
        console.log("Contact created", contact);
        res
          .status(201)
          .json(contact);
      }
    });
};

module.exports.messagesGetAll = function(req, res){

  Contact
    .find()
    .exec(function(err, contact){
      if(err){
        console.log("Error finding messages");
        res
          .status(500)
          .json(err);
      }
      else {
        console.log("Found messages ", contact.length);
        console.log("Message: " + Contact);
        res
          .json(contact);
      }
    });

};
