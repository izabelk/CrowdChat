(function () {

    require.config({
        paths: {
            jquery: 'libs/jquery-2.1.1.min',
            chai: 'libs/chai',
            httpRequester: './http-requester',
            dataLayer: './data-layer',
            controller: './controller',
        }
    });

    require(['controller', 'chai'], function (controller, chai) {
        controller.attachEvents();
    });

}());