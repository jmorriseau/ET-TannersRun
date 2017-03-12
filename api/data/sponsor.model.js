var mongoose = require('mongoose');

var sponsorSchema = new mongoose.Schema({
  nameOfCompany : {
    type : String,
    required : true
  },
  addressLine1 : {
    type : String,
    required : true
  },
  addressLine2 : {
    type : String,
    required : false
  },
  city : {
    type : String,
    required : true
  },
  state : {
    type : String,
    required : true
  },
  zip : {
    type : String,
    required : true
  },
  phone : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
    validate: function(email) {
      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }
  },
  sponsorLevel : {
    type : String,
    enum : ["platinum", "gold", "silver", "bronze", "other"],
    required : true
  },
  amount : {
    type : Number,
    min : 0,
    max : 999999999,
    required : true
  },
  sponsorParticipant : {
    type : Boolean,
    required : false
  }
});

mongoose.model('Sponsor', sponsorSchema, 'sponsor');
