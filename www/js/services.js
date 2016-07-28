angular.module('starter.services', [])

.factory('developerService', function($http) {

  function allDevs() {
    return $http.get('http://devteam-api.azurewebsites.net/api/v1/devs');
  }

  return {
    all: allDevs
  };
});
