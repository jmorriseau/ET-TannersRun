angular.module('tanner').controller("RunnerCtrl",RunnerCtrl);

function RunnerCtrl($http) {

  var self = this;
  self.isSubmitted = false;
  self.success = false;

    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear() - 1;


    if(day < 10){
      day = "0" + day;
    }
    if(month < 10){
      month = "0" + month;
    }

  self.maxDate = year + "-" + month + "-" + day;

  self.addRunner = function(){
    var postData = {
      firstName : self.firstName,
      lastName : self.lastName,
      email : self.email,
      gender : self.gender,
      birthday : self.birthday,
      phone: self.phone,
      addressOne : self.addressOne,
      addressTwo : self.addressTwo,
      city : self.city,
      state : self.state,
      zip : self.zip
    }
    if(self.reviewForm.$valid){
      console.log("Is valid");
      $http.post('/api/registration/apply',postData).then(function(){
        console.log("Participant added");
        self.success = true;
      })
    }
    else {
      self.isSubmitted = true;
    }
    console.log(postData);
  }
}
