describe('Pokemon factory', function() {
    var Pokemon;

    //  Load API module
    beforeEach(angular.mock.module('api.pokemon'));

    //  Inject service
    beforeEach(inject(function(_Pokemon_) {
        Pokemon = _Pokemon_;
    }));

    //  Verify existence
    it('should exist', function() {
        expect(Pokemon).toBeDefined();
    });
});