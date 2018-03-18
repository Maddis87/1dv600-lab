"use strict"
var request = require("supertest")
var chai = require("chai");
var support = require("../support/supportFunctions");
var app = require("../../app");
var LibraryDAO = require('../../app/dao/LibraryDAO');

module.exports.runTest = function(callback) {

  describe("AddBookResource", function() {
    describe("PUT/api/books", function () {
      
      it("adding with right response", function(done) {
  
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
        .end(function(err, res) {
          callback();
          done();
        });
      });
    });
  });
}

