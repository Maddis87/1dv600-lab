"use strict"
var request = require("supertest")
var chai = require("chai");
var app = require("../../app");
var LibraryDAO = require('../../app/dao/LibraryDAO');

//Testmodule for GetBookResource
module.exports.runTest = function (callback) {

  describe("GetBookResource", function () {

    describe("GET/api/books/{book_id}", function () {
      it("expected 200, json and returns the right book", function(done) {
  
        request(app)
        .get('/api/books/2')
        .set("Accept", 'application/json')
        .expect(200)
        .end(function(err, resp) {
          var obj = {
            id: '2',
            title: 'Foundation and Empire',
            author: "Isaac Asimov",
            genre: "Science Ficition", 
            price: "79",
            publishDate: "1952-10-12",
            description: "Foundation and Empire is a novel written by Isaac Asimov that was published by Gnome Press in 1952. It is the second book published in the Foundation Series, and the fourth in the in-universe chronology. It takes place in two halves, originally published as separate novellas. The second part, The Mule, won a Hugo Award."
          };
          chai.expect(resp.body.id).to.equal(obj.id);
          chai.expect(resp.body.title).to.equal(obj.title);
          chai.expect(resp.body.author).to.equal(obj.author);
          
          done();
          callback();
        });
      });
    });
  });
}
