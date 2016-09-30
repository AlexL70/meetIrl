(function() {
    'use strict';

    //  Define component
    angular.module('api.pokemon', [])
        .factory('Pokemon', PokemonFactory);

    PokemonFactory.$inject = ['$http'];

    function PokemonFactory($http) {
        var API = 'http://pokeapi.co/api/v2/pokemon/';
        var Pokemon = {};

        Pokemon.findByName = function(name) {
            return $http.get(API + name)
                .then(function(result) {
                        return result.data;
                    },
                    function(result) {
                        console.log('Error geting pokemon: ', result)
                    });
        };

        return Pokemon;
    }
})();