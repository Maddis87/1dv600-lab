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
            var copy = [];
            if(obj.catalog.book) {
                obj.catalog.book.forEach(element => {
                    if (element.title === data.title && element.author === data.author) {
                        exists = true;
                    }
                });
                if(!exists) {
                    copy = obj.catalog.book.slice(0);
                    copy.sort(function(a, b) {
                        return a.$.id - b.$.id;
                    });
                    var newId = parseInt(copy[copy.length - 1].$.id) + 1;
                    var i;
                    for (i = 0; i < copy.length; i++) {
                    
                        if (copy[i].$.id !==(i + 1).toString()) {
                            newId = i + 1;
                            break;
                        }
                    }
                    var newBook = {
                        $: {id: newId.toString()}, 
                        author: [data.author],
                        title: [data.title],
                        genre: [data.genre], 
                        price: [data.price],
                        publish_date: [data.publish_date],
                        description: [data.description]
                    };
                   obj.catalog.book.push(newBook);
                   LibraryDAO.writeXMLFile(obj);
                }
            }
            callback();
        });
    };
}());
