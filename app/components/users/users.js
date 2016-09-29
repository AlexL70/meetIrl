(function() {
    'use strict';

    //  Define component and controller
    angular.module('components.users', [])
        .controller('UsersController', UsersController)
        .config(function($stateProvider) {
            $stateProvider
                .state('users', {
                    url: '/users',
                    templateUrl: 'components/users/users.html',
                    controller: 'UsersController as uc'
                });
        });

    function UsersController(Users) {
        var vm = this;

        vm.users = Users.all();
    }
})();