'use strict'

/* Controllers */

var foodFruit = angular.module('foodFruit', []);

foodFruit.controller('foodListCtrl', function($scope) {
  $scope.foods = [
    {'name': 'apples'},
    {'name': 'oranges'},
    {'name': 'bananas'},
    {'name': 'grapes'},
    {'name': 'watermelons'},
    {'name': 'berries'},
    {'name': 'pears'},
    {'name': 'peaches'},
  ];
  $scope.name="World";
});