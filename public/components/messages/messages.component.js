angular.module('tanner')
  .factory('messageDataFactory',MessageDataFactory)
  .component('tbMessage', {
    restrict: 'E',
    templateUrl: 'components/messages/messages.html',
    controller: MessageCtrl
  });


function MessageDataFactory($http){
    return {
      messageList: messageList
    };

    function messageList(){
      console.log("Getting Message List");
      return $http.get('/api/contacts').then(complete).catch(failed);
    }

    function complete(response){
      return response;
    }

    function failed(error){
      console.log(error.statusText);
    }

}


function MessageCtrl(messageDataFactory){

  var SELF = this;

  //console.log(runnerDataFactory.runnerList());

  this.$postLink = function() {
    messageDataFactory.messageList().then(function(response){
      SELF.messages = response.data;
      //console.log(SELF.runners);
      console.log(response);
    })
  }

}
