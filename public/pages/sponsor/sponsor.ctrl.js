angular.module('tanner').controller("SponsorCtrl",SponsorCtrl);

function SponsorCtrl($http, $location, $timeout) {

  var self = this;
  self.isSubmitted = false;
  self.success = false;

  self.addSponsor = function(){
    var postData = {
      nameOfCompany : self.companyName,
      addressLine1 : self.addressOne,
      addressLine2 : self.addressTwo,
      city : self.city,
      state : self.state,
      zip : self.zip,
      phone : self.phone,
      email : self.email,
      sponsorLevel : self.sponsorLevel,
      amount : self.amount,
      sponsorParticipant : self.sponsorParticipant
    }

    if(self.reviewForm.$valid){
      console.log("Is valid");
      $http.post('/api/sponsor/apply',postData).then(function(){
        console.log("Sponsor added");
        self.success = true;
        // $timeout(function() {
        //   $location.path('/sponsor');
        // },3000);
      })
    }
    else {
      self.isSubmitted = true;
    }
    console.log(postData);
  }
}
