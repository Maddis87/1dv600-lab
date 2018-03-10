"use strict"

var fs = require("fs")
var xml2js = require("xml2js")
var library = require('../../app/dao/LibraryDAO')

function setUp () {
  var copyObj = {}
  library.readXMLFile(function(obj) {
    copyObj = obj;
    fs.readFile("./test/support/testData.xml", function(err, data) {
      if (err) {
        console.log(err);
      }
      xml2js.parseString(data, function (err, result) {
        library.writeXMLFile(result);
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
function resetXML() {
  fs.readFile("./test/support/copyXML.xml", function(err, data) {
    if (err) {
      console.log(err);
    }
    xml2js.parseString(data, function (err, result) {
      library.writeXMLFile(result);
    });
  });
};
function containsID(id, callback) {
  library.readXMLFile(function (obj) {
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
function containsBook(title, author, callback) {
  library.readXMLFile(function(obj) {
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