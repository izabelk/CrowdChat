define(['httpRequester', 'underscore-module', 'q'], function (httpRequester, underscoreModule, Q) {

    var baseUrl = 'http://crowd-chat.herokuapp.com/posts';

    function getAllMessages(url , success , error) {
        url = url || baseUrl;

        httpRequester.getJSON(url , success, error);
    }

    function sendMessage(user, message, url, success, error) {
        url = url || baseUrl;
        var data = {
            user: user,
            text: message
        };
        httpRequester.postJSON(url, data);
    }

    function getLimitedCountOfMessages(count, url) {
        url = url || baseUrl;
        var defer = Q.defer();

        httpRequester.getJSON(url)
        .then(function (result) {
            defer.resolve(underscoreModule.getElementsByCount(result.data, count));
        }, function (err) {
            defer.reject(err);
        })
        return defer.promise;
    }

    function getMessagesByUser(username, url) {
        url = url || baseUrl;

        var defer = Q.defer();

        httpRequester.getJSON(url)
        .then(function (result) {
            defer.resolve(underscoreModule.getMessagesByUser(result.data, username));
        },
        function (err) {
            defer.reject(err);
        });

        return defer.promise;
    }

    return {
        getAllMessages: getAllMessages,
        sendMessage: sendMessage,
        getLimitedCountOfMessages: getLimitedCountOfMessages,
        getMessagesByUser: getMessagesByUser
    };

});