(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
  
    module.exports = function (id, callback) {
        var listObj = {};
        /**
        * Read the xml file, update all book elements to a new list, except the one to delete,
        * and write the new list to the xml file.
        */
        LibraryDAO.readXMLFile(obj => {
            listObj = obj;
            var list = [];
            listObj.catalog.book.forEach(element => {
                if (element.$.id !== id) {
                    list.push(element)
                }
             });
            listObj.catalog.book = list;
            LibraryDAO.writeXMLFile(listObj);
            callback();
        });
    };
}());
