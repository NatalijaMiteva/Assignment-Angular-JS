'use strict';
var task = angular.module('task', ['ngRoute', 'ngResource'])
    .config(function($routeProvider, $resourceProvider, $locationProvider) {
        $routeProvider.when('/home', {
            templateUrl: '/views/home.html',
            controller: 'homeController',
            controllerAs: 'home',
            activeNav: 'home'
        });
        $routeProvider.when('/newTask', {
            templateUrl: '/views/newTask.html',
            controller: 'newTask.controller',
            controllerAs: "newTask",
            activeNav: 'newTask'
        });
        $routeProvider.when('/search', {
            templateUrl: '/views/searchTab.html',
            controller: 'searchTab.controller',
            controllerAs: "searchTab",
            activeNav: 'searchTab'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
        $locationProvider.html5Mode(true);
      }).run(function() {
      console.log("Application runned!")
});
