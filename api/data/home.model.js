var mongoose = require('mongoose');

var sponsorSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  link : {
    type : String,
    required : true
  }
});


mongoose.model('Home', sponsorSchema, 'sponsors');


//I don't think we need this anymore
