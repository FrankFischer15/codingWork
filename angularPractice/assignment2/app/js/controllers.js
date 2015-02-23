'use strict';

var starWarsControllers = angular.module('starWarsControllers', []);

	starWarsControllers.controller('peopleListCtrl', ['$scope', '$http', 
			function($scope, $http) {
				$http.get("http://swapi.co/api/people").success(function(data) {
					$scope.people = data.results.splice(0,5);
				});

				$scope.orderProp = 'name';
			}]);

	starWarsControllers.controller('peopleDetailCtrl', ['$scope', '$routeParams',
			function($scope, $routeParams) {
				$scope.name = $routeParams.name;
			}]);