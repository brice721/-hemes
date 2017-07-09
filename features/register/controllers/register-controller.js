(function () {
    'use strict';

    angular
        .module('register')
        .controller('RegisterCtrl', ['spAuthManager', 'RegisterService', '$scope', '$http', function (spAuthManager, RegisterService, $scope, $http) {
            var vm = this;

            $scope.adds = function () {
                debugger;
                RegisterService.sv.createUser($scope.username, $scope.password).then(function () {
                    spAuthManager.genPwdToken(length);
                    var hash = localStorage.getItem('pwdToken');
                    console.log(hash);
                });
            };

            $scope.register = function (base, hash, PasswordHash) {
                var please = $scope.password;
                localStorage.setItem('password', please);
                spAuthManager.genPwdToken(length);
                base = localStorage.getItem('base')
                hash = localStorage.getItem('pwdToken');
                PasswordHash = localStorage.getItem('passHash');
                console.log(hash);
                var payload = {
                    Username: $scope.username,
                    Password: $scope.password,
                    PasswordHash: PasswordHash,
                    Base: base,
                    Hash: hash,
                    Email: $scope.email,
                    IsActive: true
                };
                localStorage.setItem('Credentials', JSON.stringify(payload));
                $http({
                    method: 'POST',
                    url: '/api/User',
                    data: payload
                }).then(function (response) {
                    spAuthManager.authenticate();
                    localStorage.removeItem('password');
                    console.log(response);
                });
            }
        }])
})();