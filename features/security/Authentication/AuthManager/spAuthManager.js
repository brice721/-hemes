(function () {
    'use strict';

    angular
        .module('spire-helper', ['SpireAuthManager']);

    angular
        .module('SpireAuthManager', [])
        .provider('spAuthManager', function () {

            this.$get = ["$rootScope", function ($rootScope) {

                $rootScope.isAuthenticated = false;

                function authenticate() {
                    $rootScope.isAuthenticated = true;
                }

                function unauthenticate() {
                    $rootScope.isAuthenticated = false;
                }

                function setCurrentUser() {
                    $rootScope.currentUser = localStorage.getItem('Current-User');
                }

                function redirectTo() {
                    location.href = '#!/home';
                }

                function genPwdToken(length) {
                    var text = '';
                    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    length = 25;
                    for (var i = 0; i < length; i++) {
                        text += possible.charAt(Math.floor(Math.random() * possible.length));
                        localStorage.setItem('pwdToken', text);
                        if (localStorage.getItem('pwdToken') !== null) {
                            var pwd = btoa(localStorage.getItem('password'));
                            localStorage.setItem('base', pwd);
                            var pwdHash = (pwd + localStorage.getItem('pwdToken')).replace(/=/g, '');
                            localStorage.setItem('passHash', pwdHash);
                            console.log(pwdHash);
                        }
                    }
                    localStorage.removeItem('password');
                    return text;
                }

                return {
                    authenticate: authenticate,
                    unauthenticate: unauthenticate,
                    genPwdToken: genPwdToken
                }
            }]
        })
})();