(function () {
    'use strict';

    angular.module('spire', [
        'ngRoute',
        'ngResource',
        'register',
        'SpireAuthService',
        'spire-service',
        'spire-helper'
    ]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/register', {
                templateUrl: 'features/register/views/register-tpl.html',
                controller: 'RegisterCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });

    }]);
})();