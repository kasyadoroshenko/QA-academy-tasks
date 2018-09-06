var app = angular.module('LoginApp',['ngMaterial','ngAnimate','ngAria','ngMessages'])
.controller('Ctrl', function($scope){
  $scope.vm = {
      formData: {
        email: '123',
        password: '321'
      }
  };
  
});