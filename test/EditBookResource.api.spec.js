"use strict"
var request = require("supertest")
var chai = require("chai");
var support = require("./support/supportFunctions")
var app = require("../app");
var LibraryDAO = require('../app/dao/LibraryDAO');

describe("EditBookResource", function() {
  support.setUp();
  describe("POST/api/books", function() {
    it("respond with 200, json and edits the book", function(done) {
      request(app)
      .post("/api/books/1")
      .send({
        id: "1",
        title: 'Foundation',
        author: 'I.A',
        genre: 'Science Fiction',
        price: '164',
        publish_date: '1951-08-21',
        description: 'Foundation is the first novel in Isaac Asimovs Foundation Trilogy (later expanded into The Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire.'
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        LibraryDAO.readXMLFile(function(obj) {
          var updated = false;

          obj.catalog.book.forEach(element => {
            if(element.$.id === "1" && element.author[0] === "I.A") {
              updated = true;
            }
          });
            chai.expect(updated).to.equals(true);
            support.resetXML();
            done();
        });
      });
    });
  });

});