define(['underscoreModule'], function (underscoreModule) {
    var testableArray = [
      {
          by: "Pesho",
          text: "some text"
      },
      {
          by: "Pesho",
          text: "another text"
      },
      {
          by: "Rado",
          text: "blq blq"
      },
      {
          by: "Misho",
          text: "prosto test"
      },
      {
          by: "Baba meca",
          text: "sha ta izqm !"
      },
      {
          by: "Bla",
          text: "12"
      }
    ];

    describe('#underscoreModule', function () {
        it('Ask for three messages', function () {
            var result = underscoreModule.getElementsByCount(testableArray, 3);
            var expected = 3;
            expect(expected).to.be.equal(result.length);
        });
        it('Ask for a higher number than the count of messages', function () {
            var result = underscoreModule.getElementsByCount(testableArray, 100);
            var expected = testableArray.length;
            expect(result.length).to.be.equal(expected);
        });
        it('Get user"s posts by name', function () {
            var result = underscoreModule.getElementsByName(testableArray, "Pesho");
            var expected = 2;
            expect(result.length).to.be.equal(expected);
        });
        it('Get user"s posts by name when no such user exists', function () {
            var result = underscoreModule.getElementsByName(testableArray, "TEST-TEST");
            var expected = 0;
            expect(result.length).to.be.equal(expected);
        });
    });

});