(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var check = require('../dao/addBook');


    module.exports = function (id, data, callback) {
        if (!check.isInputValid(data)) {
            console.log("hello");
            return callback();
        }
        LibraryDAO.readXMLFile(function (obj) {
            obj.catalog.book = obj.catalog.book.map(element => {
                if(element.$.id === id) {
                    element = check.getXmlBookObj(data);
                }
                return element;
            });
            LibraryDAO.writeXMLFile(obj);
            callback();
        });
    };
}());
