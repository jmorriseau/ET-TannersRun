var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  name : {
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
  subject : {
    type : String,
    required : true
  },
  message : {
    type : String,
    required : true
  }
});

mongoose.model('Contact', contactSchema, 'contact');
