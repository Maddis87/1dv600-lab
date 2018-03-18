(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var bookSupport = require('../dao/bookSupport');


    module.exports = function (id, data, callback) {
        if (!bookSupport.isInputValid(data)) {
            return callback();
        }
        LibraryDAO.readXMLFile(function (obj) {
            obj.catalog.book = obj.catalog.book.map(element => {
                if(element.$.id === id) {
                    element = bookSupport.getXmlBookObj(data);
                }
                return element;
            });
            LibraryDAO.writeXMLFile(obj);
            callback();
        });
    };
}());
