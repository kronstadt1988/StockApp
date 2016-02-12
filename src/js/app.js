var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.directive('navDirectiveMessage', function() {
	return {
		restrict: 'A',
		template: 'Manage your Stock with this CRUD Application. You can add, edit and modify existing Items.'
	};
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'index.html',
      controller: 'MainController'
    });
}]);

