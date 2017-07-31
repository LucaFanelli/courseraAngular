(function () {

'use strict';

angular.module('restaurant')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuDataService','notify'];
function RegistrationController(MenuDataService,notify) {
   var reg = this;
    this.submit = function () {
      reg.getItem();
    };

    reg.getItem = function(){
                    MenuDataService.getItemFromShortName(reg.user.shortMenu)
                      .then(function(result){
                        reg.user.shortMenuResponse = result;
                        MenuDataService.setUserData(reg.user)
                        notify('Information correctly saved');
                      })
                      .catch(function(error){
                        reg.errorMessage=error
                      })
    };

}
})();
