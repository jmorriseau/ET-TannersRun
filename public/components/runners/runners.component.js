angular.module('tanner')
  .factory('runnerDataFactory',RunnerDataFactory)
  .component('tbRunner', {
    restrict: 'E',
    templateUrl: 'components/runners/runners.html',
    controller: RunnerCtrl
  });


function RunnerDataFactory($http){
    return {
      runnerList: runnerList
    };

    function runnerList(){
      console.log("Getting Runner List");
      return $http.get('/api/admin').then(complete).catch(failed);
    }

    function complete(response){
      return response;
    }

    function failed(error){
      console.log(error.statusText);
    }

}


function RunnerCtrl(runnerDataFactory){

  var SELF = this;

  //console.log(runnerDataFactory.runnerList());

  this.$postLink = function() {
    console.log("gettingHere");
    runnerDataFactory.runnerList().then(function(response){
      SELF.runners = response.data;
      //console.log(SELF.runners);
      console.log(response);
    })
  }

}
