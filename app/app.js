'use strict';
console.log("n")
var task = angular.module('task', ['ngRoute', 'ngResource'])
    .config(function($routeProvider, $resourceProvider, $locationProvider) {

        // home page LOGIN
        $routeProvider.when('/home', {
            templateUrl: '/views/home.html',
            controller: 'homeController',
            controllerAs: 'home'

        });
        $routeProvider.when('/newTask', {
            templateUrl: '/views/newTask.html',
            controller: 'newTask.controller',
            controllerAs: "newTask"
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
});
      }).run(function() {
      console.log("runnato")
});
