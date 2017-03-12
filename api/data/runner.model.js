var mongoose = require('mongoose');

var runnerSchema = new mongoose.Schema({
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    validate: function(email) {
      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }
  },
  gender : {
    type : String,
    enum : ["female", "male"],
    required : true
  },
  birthday : {
    type : Date,
    required : true
  },
  phone : {
    type : String,
    required : true,
  },
  addressOne : {
    type : String,
    required : true
  },
  addressTwo : {
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
  }

});

mongoose.model('Runner', runnerSchema, 'runner');
