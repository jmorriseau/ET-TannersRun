angular.module('tanner')
  .factory('sponsorDataFactory',SponsorDataFactory)
  .component('tbSponsor', {
    restrict: 'E',
    templateUrl: 'components/sponsors/sponsors.html',
    controller: SponsorCtrl
  });


function SponsorDataFactory($http){
    return {
      sponsorList: sponsorList
    };

    function sponsorList(){
      console.log("Getting Sponsor List");
      return $http.get('/api/sponsors').then(complete).catch(failed);
    }

    function complete(response){
      return response;
    }

    function failed(error){
      console.log(error.statusText);
    }

}


function SponsorCtrl(sponsorDataFactory){

  var SELF = this;

  this.$postLink = function() {
    sponsorDataFactory.sponsorList().then(function(response){
      SELF.sponsors = response.data;
      console.log(SELF.sponsors);

    })
  }

}

// angular.module('tanner').factory('sponsorDataFactory'), sponsorDataFactory);
//
//   funcion sponsorDataFactory($http){
//     return {
//       sponsorList: sponsorList
//     };
//
//
//   function sponsorList(){
//     return $http.get('/api/sponsors').then(complete).catch(failed);
//   }
//
//   function complete(response){
//     return response;
//   }
//
//   function failed(error){
//     console.log(error.statusText);
//   }
//
// }
