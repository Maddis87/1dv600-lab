var expect = require("chai").expect;
var bookSupport = require("../app/dao/bookSupport");

describe("bookSupport test", function() {
  describe("Validation of support functions", function() {
    it("check if checkTitle() returns true for valid input", function() {
      var result = bookSupport.checkTitle("Harry Potter");
      expect(result).to.equal(true);
    }), 
    it("check if checkTitle() returns false for invalid input", function() {
      var result = bookSupport.checkTitle("");
      expect(result).to.equal(false);
    }),
    it("check if checkAuthor() returns true for valid input", function() {
      var result = bookSupport.checkAuthor("Paolo Cohelo");
      expect(result).to.equal(true);
    }), 
    it("check if checkAuthor() returns false for invalid input", function() {
      var result = bookSupport.checkAuthor("This is just a string that is way to long");
      expect(result).to.equal(false);
    }),
    it("check if checkGenre() returns true for valid input", function() {
      var result = bookSupport.checkGenre("Fantasy");
      expect(result).to.equal(true);
    }), 
    it("check if checkGenre() returns false for invalid input", function() {
      var result = bookSupport.checkGenre("This is just a string that is way to long2");
      expect(result).to.equal(false);
    }),
    it("check if checkPrice() returns true for valid input", function() {
      var result = bookSupport.checkPrice("200");
      expect(result).to.equal(true);
    }), 
    it("check if checkprice() returns false for invalid input", function() {
      var result = bookSupport.checkPrice("10000000");
      expect(result).to.equal(false);
    }),
    it("check if checkPublishDate() returns true for valid input", function() {
      var result = bookSupport.checkPublishDate("180201");
      expect(result).to.equal(true);
    }), 
    it("check if checkPublishDate() returns false for invalid input", function() {
      var result = bookSupport.checkPublishDate("");
      expect(result).to.equal(false);
    }),
    it("check if checkDescription() returns true for valid input", function() {
      var result = bookSupport.checkDescription("This is a testPhrase for a unit test!");
      expect(result).to.equal(true);
    }), 
    it("check if checkDescription() returns false for invalid input", function() {
      var result = bookSupport.checkDescription("");
      expect(result).to.equal(false);
    });
  }), 
  describe("Test output for getXMLBookObj()", function(done) {
    it("with only data as input", function() {
      var data = {
        id: "1", 
        title: "Olympic games 2018",
        author: "Johnny B", 
        genre: "reality", 
        price: "300",
        publish_date: "2018-02-28",
        description: "A book about the results of the winter olympig cames 2018"
      };

      var obj = bookSupport.getXmlBookObj(data);
      expect(data.id).to.equal(obj.$.id);
      expect(data.author).to.equal(obj.author[0]);
      expect(data.title).to.equal(obj.title[0]);
      expect(data.genre).to.equal(obj.genre[0]);
      expect(data.price).to.equal(obj.price[0]);
      expect(data.publish_date).to.equal(obj.publish_date[0]);
      expect(data.description).to.equal(obj.description[0]);
    }),
    it("with data and id as input", function() {
      var data = {
        id: "1", 
        title: "Olympic games 2018",
        author: "Johnny B", 
        genre: "reality", 
        price: "300",
        publish_date: "2018-02-28",
        description: "A book about the results of the winter olympig cames 2018"
      };

      var obj = bookSupport.getXmlBookObj(data, "2");
      expect("2").to.equal(obj.$.id);
      expect(data.author).to.equal(obj.author[0]);
      expect(data.title).to.equal(obj.title[0]);
      expect(data.genre).to.equal(obj.genre[0]);
      expect(data.price).to.equal(obj.price[0]);
      expect(data.publish_date).to.equal(obj.publish_date[0]);
      expect(data.description).to.equal(obj.description[0]);
    });
  });
});
