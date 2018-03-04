var expect = require("chai").expect;
var AddBook = require("../app/resources/AddBookResource");

describe("AddBook test", function() {
  describe("Validation of checkTitle", function() {
    it("check if checkTitle returns true for valid input", function() {
      var result = AddBook.checkTitle("Harry Potter");
      expect(result).to.equal(true);
    });
  });
});