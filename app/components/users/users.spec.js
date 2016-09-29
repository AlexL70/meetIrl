describe('UsersController', function() {
    var $controller, UsersController;

    //  Load modules
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.users'));

    //  Instantiation
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
        UsersController = $controller('UsersController',{});
    }));

    //  Verify existence
    it('should be defined', function(){
        expect(UsersController).toBeDefined();
    });
});