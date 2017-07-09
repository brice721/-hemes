(function () {
    'use strict';

    angular
        .module('spire')
        .run(run);

    run.$inject = ['$rootScope', 'spAuthService'];

    function run($rootScope, spAuthService) {
        $rootScope.spAuthService = spAuthService;
    }
})();