(function () {
    'use strict';

    angular
        .module('register')
        .service('RegisterService', ['$resource', function ($res) {
            var sv = this;

            var registerApiResource = $res('content', {}, {
                getUser: {
                    method: 'GET',
                    url: 'api/User/',
                    isArray: true
                },
                deleteUser: {
                    method: 'POST',
                    url: 'api/User/'
                },
                createUser: {
                    method: 'POST',
                    url: 'api/User'
                },
                updateUser: {
                    method: 'POST',
                    url: 'api/User/'
                }
            });

            sv.createUser = function (username, password, email) {
                return registerApiResource.createUser({
                    Username: username,
                    Uassword: password,
                    Email: email
                }).$promise.then(function (response) {
                    console.log(response);
                });
            }
        }])

})();