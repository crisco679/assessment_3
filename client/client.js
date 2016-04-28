var app = angular.module('heroApp', []);

app.controller('HeroController', ['$http', '$scope', function($http, $scope){
  $scope.data = {};
  $scope.options = ['Invisibiity', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength','Accelerated Healing', 'Power Blast', 'Animal Affinity'];
//posting to database
  $scope.sendData = function(){
    $http.post('/hero', $scope.data).then(function(response){
     console.log(response);
     $scope.data = {};
   });
  }
  // $scope.getHeroes = function(){
  //   $http.get('/hero').then(function(response){
  //     $scope.heroes=response.data;
  //     return response.data;
  //   });
  }
}]);
