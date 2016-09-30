(function() {
    'use strict';

    //  Define profile component and controller
    angular.module('components.profile', [])
        .controller('ProfileController', ProfileController)
        .config(function($stateProvider) {
            $stateProvider
                .state('profile', {
                    url: '/user/:id',
                    templateUrl: 'components/profile/profile.html',
                    controller: 'ProfileController as pc'
                });
        });

    function ProfileController() {
        var vm = this;
    }
})();