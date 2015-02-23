'use strict';	

var starWarsApp = angular.module('starWarsApp', [
	'ngRoute',
	'starWarsControllers'
]);

starWarsApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/people', {
			templateUrl: 'partials/people-list.html',
			controller: 'peopleListCtrl'
		}).
		when('/people/:name', {
			templateUrl: 'partials/people-details.html',
			controller: 'peopleDetailCtrl'
		}).
		otherwise({
			redirectTo: '/people'
		});
	}]);