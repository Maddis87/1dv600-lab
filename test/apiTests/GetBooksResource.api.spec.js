"use strict"
var request = require("supertest")
var chai = require("chai");
var support = require("../support/supportFunctions");
var app = require("../../app");
var LibraryDAO = require('../../app/dao/LibraryDAO');

module.exports.runTest = function (callback) {

  describe("GetBooksResource", function () {

    describe("GET/api/books", function () {
      it("expected 200, json and returns the booklist", function(done) {
        request(app)
        .get('/api/books/')
        .set('Accept', 'application/json')
        .expect(200)
        .then(function(resp) {
          LibraryDAO.readXMLFile(function(obj) {
            var length = obj.catalog.book.length;
            chai.expect(resp.body.length).to.equals(length);
            done();
            callback();
          });
        });
        
      });
    });
  });
};
