(function () {

    require.config({
        paths: {
            mocha: 'libs/mocha',
            chai: 'libs/chai',
            q: 'libs/q.min',
            jquery: 'libs/jquery-2.1.1.min',
            underscore: 'libs/underscore',
            httpRequester: './http-requester',
            dataLayer: './data-layer',
            underscoreModule: './underscore-module',
            messagesModule: './messages-module'
        }
    });

    require(['chai', 'mocha'], function (chai) {
        mocha.setup('bdd');
        expect = chai.expect;
        require(['tests/underscore-module-test', 'tests/messages-module-test'], function () {
            mocha.run();
        });
    });

}());