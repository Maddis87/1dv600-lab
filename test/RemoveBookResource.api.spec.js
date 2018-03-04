"use strict"
var request = require("supertest")
var chai = require("chai");

var app;
var LibraryDAO = require('../app/dao/LibraryDAO');


describe("RemoveBookResource", function () {
  
  describe("DELETE/api/books", function () {
    var listObj = {};
    app = require("../app");
    it("response with 200 and json", function(done) {
      LibraryDAO.readXMLFile(obj => {
        listObj = obj;
        return request(app)
        .delete('/api/books/5')
        .set('Accept', 'application/json')
        .then(function(resp, err) {
          LibraryDAO.readXMLFile(function (obj) {
            var isIdInList = false;
            var arr = obj.catalog.book;
            arr.forEach(element => {
              if (element.$.id === "5") {
                isIdInList = true;
              }
            });
            LibraryDAO.writeXMLFile(listObj);
            chai.expect(isIdInList).to.equal(false);
            done();
          });
        });
      });
    }, 
    it(""));
  });
});