angular.module('starter.controllers', [])

.controller('DevCtrl', function(developerService) {
  var vm = this;

  developerService.all()
    .then(function(response) {
      vm.devs = response.data;
    });
});
