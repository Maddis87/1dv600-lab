"use strict"
var request = require("supertest")
var chai = require("chai");
var support = require("./support/supportFunctions")
var app = require("../app");
var LibraryDAO = require('../app/dao/LibraryDAO');

describe("RemoveBookResource", function () {
  support.setUp();
  describe("DELETE/api/books", function () {
    var counter = 0;
    it("removes the right book", function(done) {
      request(app)
      .delete('/api/books/1')
      .set('Accept', 'application/json')
      .then(function (response) {
        counter++;
        support.containsID("1", function (result) {
          chai.expect(result).to.equal(false);
          if (counter === 2) {
            support.resetXML();
          }
          done();
        });
      });
    }, 
    it("respons with 200 and json", function (done) {
      request(app)
      .delete('/api/books/3')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function() {
        counter++;
        if(counter === 2) {
          support.resetXML();
        }
        done();
      });
    }));
  });
});