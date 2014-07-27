/// <reference path="_references.js" />
define(['jquery', 'dataLayer'], function (jquery, dataLayer) {

    var dataPersister = dataLayer.getDataPersister();

    function attachEvents() {
       
        $('#btn-join-chat').on('click', function () {
            var username = $('#tb-username-input').val();
            localStorage.clear();
            localStorage.setItem('username', username);
            $('#btn-exit-chat').show();
            $(this).hide();
            $('#chat-holder').show();
           
            setInterval(function () {
                dataPersister.viewAllMessages();
            }, 1000);
        });

        $('#btn-exit-chat').on('click', function () {
            $(this).hide();
            $('#btn-join-chat').show();
            localStorage.clear();
            $('#chat-holder').hide();
            $('#messages-container').hide();
            $('#tb-username-input').val('');
            $('#message-container').val('');
           
        });

        $('#btn-send').on('click', function () {
            var message = $('#message-container').val();
            var username = localStorage.getItem('username');
            var data = {
                user: username,
                text: message
            };
            dataPersister.postMessage(data);
            $('#message-container').val('');
        });
    }

    return {
        attachEvents: attachEvents
    }

});