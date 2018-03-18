"use strict"
var request = require("supertest")
var chai = require("chai");
var app = require("../../app");
var LibraryDAO = require('../../app/dao/LibraryDAO');

//Test module for EditBookResource
module.exports.runTest = function (callback) {

  describe("EditBookResource", function() {
    
    describe("POST/api/books", function() {
      it("respond with 200, json and edits the book", function(done) {
        request(app)
        .post("/api/books/1")
        .set('Application', 'application/json')
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
        .then(function(err, res) {
          //Read the file to check that it updates the book in the xml.
          LibraryDAO.readXMLFile(function(obj) {
            var updated = false;
            obj.catalog.book.forEach(element => {
              if(element.$.id === "1" && element.author[0] === "I.A") {
                updated = true;
              }
            });
              chai.expect(updated).to.equals(true);
              done();
              callback();
          });
        });
      });
    });
  });
};
