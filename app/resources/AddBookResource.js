(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var bookSupport = require("../dao/bookSupport");
    
    module.exports = function (data, callback) {
        if (!bookSupport.isInputValid(data)) {
            throw new TypeError("The input is not valid")
        } 
        //reads the xml file, check if the given book exists, if not, add to the xml file.
        LibraryDAO.readXMLFile(function (obj) {
            var exists = false;
            for(var i = 0; i < obj.catalog.book.length && !exists; i++) {
                var element = obj.catalog.book[i];
                if (element.title[0] === data.title && element.author[0] === data.author) {
                     exists = true;
                }
            }
            if(!exists) {
                 var newId = bookSupport.getNewId(obj.catalog.book);
                var newBook = bookSupport.getXmlBookObj(data, newId)
                obj.catalog.book.push(newBook);
                LibraryDAO.writeXMLFile(obj);
            }
            callback();
        });
    };
}());
