/// <reference path="_references.js" />
define(['jquery', 'httpRequester'], function (jquery, httpRequester) {

    var resouceUrl = 'http://crowd-chat.herokuapp.com/posts';

    var DataPersister = (function () {

        function DataPersister() {
            this.url = resouceUrl;
        }

        DataPersister.prototype = {
            viewAllMessages: function () {

                httpRequester.getJSON(this.url,
                    function (data) {
                        var chatter, $chattersList, i;
                        $chattersList = $('<ul/>').addClass('chatters-list');
                        for (i = data.length - 1; i >= 0; i--) {
                            chatter = data[i];
                            $('<li />')
                              .addClass('chatter-item')
                              .append($('<strong /> ')
                                .html(chatter.by + ' said: '))
                              .append($('<span />')
                                .html(chatter.text))
                              .appendTo($chattersList);
                        }
                        $('#messages-container').html($chattersList);

                    },
                    function (error) {
                        console.log(error);
                    });
            },
            postMessage: function (data) {

                var self = this;

                httpRequester.postJSON(this.url, data,
                     function (receivedData) {
                         self.viewAllMessages();
                     },
                     function (error) {
                         console.log(error);
                     });
            }
        }

        return DataPersister;

    }());

    return {
        getDataPersister: function () {
            return new DataPersister();
        }
    };
});