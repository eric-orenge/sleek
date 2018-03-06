var sleek = angular.module('sleek', ['ui.router']);

sleek.config(function ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/product-search');


    $stateProvider

        .state('search', {

            url: '/product-search',

            templateUrl: 'product-search.html',

            controller: 'searchCtrl'

        })

        .state('results', {

            url: '/results',

            templateUrl: 'results.html',

            controller: 'resultsCtrl'

        });

});