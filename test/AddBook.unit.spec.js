var expect = require("chai").expect;
var AddBook = require("../app/dao/addBook");

describe("AddBook test", function() {
  describe("Validation of support functions for AddBookResource", function() {
    it("check if checkTitle() returns true for valid input", function() {
      var result = AddBook.checkTitle("Harry Potter");
      expect(result).to.equal(true);
    }), 
    it("check if checkTitle() returns false for invalid input", function() {
      var result = AddBook.checkTitle("");
      expect(result).to.equal(false);
    }),
    it("check if checkAuthor() returns true for valid input", function() {
      var result = AddBook.checkAuthor("Paolo Cohelo");
      expect(result).to.equal(true);
    }), 
    it("check if checkAuthor() returns false for invalid input", function() {
      var result = AddBook.checkAuthor("This is just a string that is way to long");
      expect(result).to.equal(false);
    }),
    it("check if checkGenre() returns true for valid input", function() {
      var result = AddBook.checkGenre("Fantasy");
      expect(result).to.equal(true);
    }), 
    it("check if checkGenre() returns false for invalid input", function() {
      var result = AddBook.checkGenre("This is just a string that is way to long2");
      expect(result).to.equal(false);
    }),
    it("check if checkPrice() returns true for valid input", function() {
      var result = AddBook.checkPrice("200");
      expect(result).to.equal(true);
    }), 
    it("check if checkprice() returns false for invalid input", function() {
      var result = AddBook.checkPrice("10000000");
      expect(result).to.equal(false);
    }),
    it("check if checkPublishDate() returns true for valid input", function() {
      var result = AddBook.checkPublishDate("180201");
      expect(result).to.equal(true);
    }), 
    it("check if checkPublishDate() returns false for invalid input", function() {
      var result = AddBook.checkPublishDate("");
      expect(result).to.equal(false);
    }),
    it("check if checkDescription() returns true for valid input", function() {
      var result = AddBook.checkDescription("This is a testPhrase for a unit test!");
      expect(result).to.equal(true);
    }), 
    it("check if checkDescription() returns false for invalid input", function() {
      var result = AddBook.checkDescription("");
      expect(result).to.equal(false);
    });
  });
});
