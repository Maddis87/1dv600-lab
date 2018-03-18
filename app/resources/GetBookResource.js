(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var book = require('../dao/book')

    module.exports = function (id, callback) {
        LibraryDAO.readXMLFile(function (obj) {
            var bookObj = {};
            if(obj.catalog.book) {
                obj.catalog.book.forEach(element => {
                    if(element.$.id === id) {
                        bookObj = book.createBook(element.$.id, element.title.toString(), element.author.toString(), element.genre.toString(),
                        element.publish_date.toString(), element.price.toString(), element.description.toString());
                    }
                });
            }
            callback(JSON.stringify(bookObj));
        });
    };

}());
