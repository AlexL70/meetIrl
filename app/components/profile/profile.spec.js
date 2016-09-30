describe('components.profile', function() {
    var $controller;

    //  Load modules
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.profile'));

    //  Inject controller
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('ProfileController', function() {
        var ProfileController;

        //  Create controller instance
        beforeEach(function() {
            ProfileController = $controller('ProfileController', {});
        });

        //  Verify existence
        it('should be defined', function() {
            expect(ProfileController).toBeDefined();
        });
    });
})