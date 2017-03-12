angular.module('tanner').controller("ContactCtrl",ContactCtrl);

function ContactCtrl($http) {

  var self = this;
  self.isSubmitted = false;
  self.success = false;

  self.addRunner = function(){
    var postData = {
      name : self.name,
      email : self.email,
      subject : self.subject,
      message : self.message
    }
    if(self.reviewForm.$valid){

      console.log("Is valid");
      $http.post('/api/contact',postData).then(function(){
        console.log("Contact added");
        self.success = true;
      })
    }
    else {
      self.isSubmitted = true;
    }
    console.log(postData);
  }
}
