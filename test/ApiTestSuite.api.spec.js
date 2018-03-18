"use strict"

var support = require("./support/supportFunctions");

var removeBookResource = require("./apiTests/RemoveBookResource.api.spec");
var addBookResource = require("./apiTests/AddBookResource.api.spec");
var editBookResource = require("./apiTests/EditBookResource.api.spec");
var getBookResource = require("./apiTests/GetBookResource.api.spec");
var getBooksResource = require("./apiTests/GetBooksResource.api.spec");



  removeBookResource.runTest(function(){
    editBookResource.runTest(function() {
      getBooksResource.runTest(function() {
        getBookResource.runTest(function() {
          addBookResource.runTest(function() {
            support.resetXML();
            console.log("Tests are done");
          });
        });
      });
    });
  });
