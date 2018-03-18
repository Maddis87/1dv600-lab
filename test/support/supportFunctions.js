"use strict"

var fs = require("fs")
var xml2js = require("xml2js")
var LibraryDAO = require('../../app/dao/LibraryDAO')

//support functions for the test modules.

//Make a copy of the original xml and writes the testdata to that file.
function setUp () {
  LibraryDAO.readXMLFile(function(obj) {
    
    fs.readFile("./test/support/testData.xml", function(err, data) {
      if (err) {
        console.log(err);
      }
      xml2js.parseString(data, function (err, result) {
        LibraryDAO.writeXMLFile(result);
      });
    });
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(obj);
    fs.writeFile("./test/support/copyXML.xml", xml, function (err) {
      if (err) {
          console.log(err);
      }
    });
  });
};

//resets the original xml after the tests are done.
function resetXML() {
  fs.readFile("./test/support/copyXML.xml", function(err, data) {
    if (err) {
      console.log(err);
    }
    xml2js.parseString(data, function (err, result) {
      LibraryDAO.writeXMLFile(result);
    });
  });
};

//Checks if a given id exists in the xml file.
function containsID(id, callback) {
  LibraryDAO.readXMLFile(function (obj) {
    var isIdInList = false;
    var arr = obj.catalog.book;
    arr.forEach(element => {
      if (element.$.id === id) {
        isIdInList = true;
      }
    });
    callback(isIdInList);
  });
};
//checks if a given book exists in the xml file.
function containsBook(title, author, callback) {
  LibraryDAO.readXMLFile(function(obj) {
    console.log(obj);
    var isBookInList = false;
    var arr = obj.catalog.book;

    arr.forEach(element => {
      if (element.title[0] === title && element.author[0] === author) {
        isBookInList = true;
      }
    });
    callback(isBookInList);
  });
};

module.exports = {
  setUp, 
  resetXML, 
  containsID,
  containsBook
};