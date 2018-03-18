(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var addBook = require("../dao/addBook")
    
    module.exports = function (data, callback) {
        if (!addBook.isInputValid(data)) {
            throw new TypeError("The input is not valid")
        } 
        LibraryDAO.readXMLFile(function (obj) {
            var exists = false;
            for(var i = 0; i < obj.catalog.book.length && !exists; i++) {
                var element = obj.catalog.book[i];
                if (element.title[0] === data.title && element.author[0] === data.author) {
                     exists = true;
                }
            }
            if(!exists) {

                 var newId = addBook.getNewId(obj.catalog.book);
                var newBook = addBook.getXmlBookObj(data, newId)
                obj.catalog.book.push(newBook);
                LibraryDAO.writeXMLFile(obj);
            }
            callback();
        });
    };
}());
