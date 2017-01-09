"use strict";

(function(){
  angular
  .module("app", [])
  .component("demoForm", {
    templateUrl: "demo-form/demo-form.template.html",
    controller: DemoFormController
  });
  function DemoFormController(){
    var vm= this;
    vm.submitUsername = submitUsername;
    vm.resetUserNameForm =resetUserNameForm;
    vm.user= {};

    function submitUsername(username, password){
      if(username && password)
      console.log(username, password);
    }
    function resetUserNameForm(){
      vm.user = {};
      vm.usernameForm.$setPristine();
      vm.usernameForm.$setUntouched();
    }

  }
})();
