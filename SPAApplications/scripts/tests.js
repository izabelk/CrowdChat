define(['controller'], function (controller) {

    describe('#controller', function () {
        it('save username to localStorage', function () {
            controller.attachEvents();
            expect(localStorage.length).to.equal(0);
        });
    });
   

});