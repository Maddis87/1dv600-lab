"use strict"

var fs = require("fs")
var xml2js = require("xml2js")
var library = require('../../app/dao/LibraryDAO')

function copyXML () {
  var copyObj = {}
  library.readXMLFile(function(obj) {
    copyObj = obj;
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(obj);
    fs.writeFile("./copyXML.xml", xml, function (err) {
      if (err) {
          console.log(err);
      }
    });
  });
};
function resetXML() {
  fs.readFile("./copyXML.xml", function(err, data) {
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

module.exports = {
  copyXML, 
  resetXML, 
  containsID
};