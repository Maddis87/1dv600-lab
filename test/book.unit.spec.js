var expect = require("chai").expect
var book = require("../app/dao/book");

//Test module for book.js
describe("book test", function() {

  describe("validation of book.createBook(input)", function() {

    it("book.createBook() return a book object with valid input", function () {

      var bookObj = book.createBook("1", "Software Engineering", "Ian Sommerville",
     "non-fiction", "2016-01-01", "100", "A book about the development process of software engineering");

     expect(bookObj.id).to.equal("1");
     expect(bookObj.author).to.equal("Ian Sommerville");
     expect(bookObj.title).to.equal("Software Engineering");
     expect(bookObj.genre).to.equal("non-fiction");
     expect(bookObj.publishDate).to.equal("2016-01-01");
     expect(bookObj.price).to.equal("100");
     expect(bookObj.description).to.equal("A book about the development process of software engineering");
      
    }),
    it("book.create return false with invalid input", function() {
      var bookObj = book.createBook("2", 2, "Ian Sommerville");
      expect(bookObj).to.equal(false);
    });
  });
});