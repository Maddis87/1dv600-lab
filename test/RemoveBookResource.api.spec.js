"use strict"
var request = require("supertest")
var chai = require("chai");

var app = require("../app")
var LibraryDAO = require('../app/dao/LibraryDAO');


describe("RemoveBookResource", function () {
  
  describe("DELETE/api/books", function () {
    var listObj = {};
    it("response with 200 and json", function(done) {
      LibraryDAO.readXMLFile(obj => {
        listObj = obj;
        request(app)
        .delete('/api/books/5')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/, done)
        .then(function () {
          it("removed the right book", function () {
            LibraryDAO.readXMLFile(function (obj) {
              var isIdInList = false;
              var arr = obj.catalog.book;
              arr.forEach(element => {
                if (element.$.id === 4) {
                  isIdInList = true;
                }
              });
              console.log(listObj);
              LibraryDAO.writeXMLFile(listObj);
              chai.expect(isIdInList).to.equal(false);
            });
          });
        });
      });
    });
  });
});