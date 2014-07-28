define(['messagesModule'], function (messagesModule) {

    var correctUrl = 'http://crowd-chat.herokuapp.com/posts';
    var inccorectUrl = 'http://crowd-chat.herokuapp.com/postsqweqweqweqwe';

    describe("#messageModule", function () {
        it("GetMessage function works correct", function (done) {
            var expected = 2;
            messagesModule.getAllMessages(correctUrl, function (data, statusText, xhr) {
                var expectedTextStatus = 'success';
                returnedStatus = (xhr.status / 100) | 0;
                expect(statusText).to.deep.equal(expectedTextStatus);
                expect(expected).to.deep.equal(returnedStatus);
                done();
            })
        });
        it("GetMessage function works wtih incorrect url", function (done) {
            messagesModule.getAllMessages(inccorectUrl, function (data, statusText, xhr) {},
            function (err) {
                var expectedTextStatus ='Not Found'
                var expected = 4;
                console.log(err);
                    returnedStatus = (err.status / 100) | 0;
                    expect(expected).to.deep.equal(returnedStatus);
                    expect(err.statusText).to.deep.equal(expectedTextStatus);
                    done();
            });
   
        });
        it("Test for sending a message", function (done) {
          
            messagesModule.sendMessage("Pesho", "Pesho", function (data, statusText, xhr) {
                var expectedData = true;
                var expectedTextStatus = 'success';
                var expectedStatus = 2;
                expect(statusText).to.be.deep.equal(expectedTextStatus);
                var returnedStatus = (xhr.status / 100) | 0;
                expect(returnedStatus).to.deep.equal(expectedStatus);
                expect(expectedData).to.be.deep.equal(data);
                done();
            },
            function (error) {
            });
      
        })
    });
});