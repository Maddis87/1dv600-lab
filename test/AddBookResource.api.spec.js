'use strict'
var request = require("supertest")
var chai = require("chai");
var support = require("./support/supportFunctions")
var app = require("../app");
var LibraryDAO = require('../app/dao/LibraryDAO');

describe("AddBookResource", function() {
  support.setUp();
  describe("PUT/api/books", function () {
    var counter = 0;
    it("adding the right book right response", function(done) {

      request(app)
      .put('/api/books/')
      .send({
        title: 'Big Java',
        author: 'Cay Horstman',
        genre: 'computer programming',
        price: '300',
        publish_date: '2013',
        description: 'A book about the programming language Java.'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then(function(err, res) {
        support.containsBook('Big Java', 'Cay Horstman', function(result) {
          chai.expect(result).to.equal(true);
          done();
        });
      });
    });
  });
});
