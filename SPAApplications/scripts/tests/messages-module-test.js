define(['messagesModule'], function (messagesModule) {

    var correctUrl = 'http://crowd-chat.herokuapp.com/posts';
    var inccorectUrl = 'http://crowd-chat.herokuapp.com/postsqweqweqweqwe';

    describe("Message module", function () {
        it("GetMessage function works correct", function (done) {
            var expected = 2;
            messagesModule.getAllMessages(correctUrl)
            .then(function (data) {
                console.log(data.xhr.status);
                returnedStatus = (data.xhr.status / 100) | 0;
                expect(expected).to.deep.equal(returnedStatus);
                done();
            }).done(null, done);
        });
        it("GetMessage function works wtih incorrect url", function (done) {
            var expected = 4;
            messagesModule.getAllMessages(inccorectUrl)
            .then(function (data) {
                //console.log(data);
                returnedStatus = (data.xhr.status / 100) | 0;
                expect(expected).to.deep.equal(returnedStatus);
                done();
            }, function (err) {
                returnedStatus = (err.status / 100) | 0;
                expect(expected).to.deep.equal(returnedStatus);
                done();
            }).done(null, done);
        });
        it("Test for sending a message", function (done) {
            var expectedData = true;
            var expectedTextStatus = 'success';
            var expectedStatus = 2;
            messagesModule.sendMessage("Pesho", "Pesho")
                .then(function (result) {
                    //console.log(result); ->true
                    expect(result).to.be.equal(expectedData);
                    //expect(result.textStatus).to.be.deep.equal(expectedTextStatus);
                    //var returnedStatus = (result.xhr.status / 100) | 0;
                    //expect(returnedStatus).to.deep.equal(expectedStatus);
                    done();
                }).done(null, done);
        })
    });
});