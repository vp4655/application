/**
 * Created by Valentino on 12.12.2015..
 */
var twitterApp = angular.module('twitterApp', ['ngMaterial', 'ui.router', 'ui.bootstrap', 'ngMessages', 'credit-cards', 'ngStorage']);

twitterApp.config(function($locationProvider, $stateProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'modules/partials/index.html',
            controller: 'HomeController'
        })
        .state('index', {
            url: '/first',
            templateUrl: 'modules/partials/first.html',
            controller: 'IndexController'
        })
        .state('users', {
            url: '/index',
            templateUrl: 'modules/partials/users.html',
            controller: 'UsersController'
        })

});