describe('Pokemon factory', function() {
    var Pokemon, $q, $httpBackend;

    //  Add endpoint
    var API = 'http://pokeapi.co/api/v2/pokemon/';

    //  Add mocked respose
    var RESPONSE_SUCCESS = {
        id: 25,
        name: 'pikachu',
        sprites: {
            front_default: 'http://pokeapi.co/media/sprites/pokemon/25.png'
        },
        types: [{
            type: { name: 'electric' }
        }]
    };
    //  Mock Pokemon API bad response
    var RESPONSE_ERROR = {
        detail: 'Not found.'
    };

    //  Load API module
    beforeEach(angular.mock.module('api.pokemon'));

    //  Inject service
    beforeEach(inject(function(_Pokemon_, _$q_, _$httpBackend_) {
        Pokemon = _Pokemon_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    //  Verify existence
    it('should exist', function() {
        expect(Pokemon).toBeDefined();
    });

    describe('findByName', function() {
        var result;

        beforeEach(function() {
            //  Initialize result
            result = {};

            //  Spy on service, but allow to continue its implementation
            spyOn(Pokemon, 'findByName').and.callThrough();
        });

        it('should return a pokemon when called with valid name', function() {
            var search = 'pikachu';

            //  Declare endpoing we expect our service to hit and provide and provide
            //  it with our mocked return value
            $httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_SUCCESS));

            expect(Pokemon.findByName).not.toHaveBeenCalled();
            expect(result).toEqual({});

            Pokemon.findByName(search)
                .then(function(res) {
                    result = res;
                });

            //  Flush pending HTTP request
            $httpBackend.flush();

            expect(Pokemon.findByName).toHaveBeenCalledWith(search);
            expect(result.id).toEqual(25);
            expect(result.name).toEqual('pikachu');
            expect(result.sprites.front_default).toContain('.png');
            expect(result.types[0].type.name).toEqual('electric');
        });

        it('should return a 404 when called with invalid name', function() {
            //  Set bad name
            var search = 'godzilla';

            //  Update status code and response object
            //$httpBackend.whenGET(API + search).respond(404, $q.reject(RESPONSE_ERROR));
            //  Original option with 404 param does not work for some reason (AlexL70)
            $httpBackend.whenGET(API + search).respond($q.reject(RESPONSE_ERROR));

            expect(Pokemon.findByName).not.toHaveBeenCalled();
            expect(result).toEqual({});

            //  Update chained method to catch
            Pokemon.findByName(search)
                .catch(function(res) {
                    result = res;
                });
            $httpBackend.flush();

            expect(Pokemon.findByName).toHaveBeenCalledWith(search);
            expect(result.detail).toEqual('Not found.');
        });
    });
});