(function(){
    'use strict';

    //  Define component
    angular.module('api.pokemon', [])
    .factory('Pokemon', PokemonFactory);

    function PokemonFactory() {
        var Pokemon = {};

        return Pokemon;
    }
})();