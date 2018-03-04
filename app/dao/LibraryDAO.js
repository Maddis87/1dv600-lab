(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');
    const path = require('path')
    const xmlPath = path.resolve('.', 'books.xml')


    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
        
           fs.readFile(xmlPath, function(err, data) {
                xml2js.parseString(data, function(err, result) {
                    callback(result);
                });
            });
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {
            var builder = new xml2js.Builder();
            var xml = builder.buildObject(data);
            fs.writeFile(xmlPath, xml, function (err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    };
    module.exports = LibraryDAO;
}());
