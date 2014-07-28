(function () {

    require.config({
        paths: {
            jquery: 'libs/jquery-2.1.1.min',
            underscore: 'libs/underscore',
            httpRequester: './http-requester',
            dataLayer: './data-layer',
            controller: './controller',
        }
    });

    require(['controller'], function (controller) {
        controller.attachEvents();
    });

}());