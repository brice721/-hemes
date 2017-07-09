(function () {
    'use strict';

    angular
        .module('spire-service', ['SpireAuthService']);

    angular
        .module('SpireAuthService', [])
        .service('spAuthService', ['spAuthManager', function (spAuthManager) {

            function login() {
                spAuthManager.authenticate();
            }

            function logout() {
                localStorage.removeItem('sp_token');
                spAuthManager.unauthenticate();
            }

            function setCredentials() {
                var a = btoa(password);
                var authData = (a + localStorage.getItem('pwdToken')).replace(/=/, '');
                localStorage.setItem('passHash', authData);

                console.log(authData);
                return authData;
            }

            function register() {
                setCredentials();
            }

            return {
                login: login,
                logout: logout,
                register: register,
                setCredentials: setCredentials
            }
        }])
})();