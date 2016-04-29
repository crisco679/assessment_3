var app = angular.module('heroApp', []);

app.controller('HeroController', ['$http', '$scope', function($http, $scope){
  $scope.data = {};
  $scope.heroes= [];
  $scope.options = ['Invisibiity', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength','Accelerated Healing', 'Power Blast', 'Animal Affinity'];
//posting to database

var fetchHeroes = function(){
  return $http.get('/hero/heroes').then(function(response){
    console.log(response);
    if(response.status !== 200){
      console.log('Failed to fetch heroes');
    }
    $scope.data = {};
    $scope.heroes = response.data;
    return response.data;
  })
};
$scope.addHero = function(hero){
  console.log('add hero function', hero);
  return $http.post('/hero/heroes', hero).then(fetchHeroes());
};
fetchHeroes();
// $scope.removeHero = function(hero){
//
// }
}]);
