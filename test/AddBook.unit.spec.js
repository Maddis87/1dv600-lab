var expect = require("chai").expect;
var AddBook = require("../app/dao/addBook");

describe("AddBook test", function() {
  describe("Validation of support functions for AddBookResource", function() {
    it("check if checkTitle returns true for valid input", function() {
      var result = AddBook.checkTitle("Harry Potter");
      expect(result).to.equal(true);
    }, 
    it("check if checkTitle returns false for invalid input", function() {
      var result = AddBook.checkTitle("");
      expect(result).to.equal(false);
    }));
  });
});
