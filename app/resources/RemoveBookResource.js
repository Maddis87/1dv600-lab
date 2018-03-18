(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    
    module.exports = function (id, callback) {
        var listObj = {};

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
