(function () {
    'use strict';

    angular
        .module('login')
        .controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
            $scope.login = function (PasswordHash) {
                PasswordHash = (btoa($scope.pwd) + localStorage.getItem('pwdToken')).replace(/=/g, '');
                var payload = {
                    Username: $scope.uname,
                    Password: $scope.pwd
                };
                $http({
                    method: 'GET',
                    url: '/api/User',
                    data: payload
                }).then(function (response) {
                    if ($scope.uname === Username &&
                        $scope.PasswordHash === PasswordHash) {
                        spAuthManager.authenticate();
                        spAuthManager.setCurrentUser();
                        spAuthManager.redirectTo();
                    }
                });
            }
        }])
})();