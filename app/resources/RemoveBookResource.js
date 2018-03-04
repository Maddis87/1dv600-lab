(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var listObj = {};

    LibraryDAO.readXMLFile(obj => {
        listObj = obj;
    });


    module.exports = function (id, callback) {
       var list = [];
       listObj.catalog.book.forEach(element => {
        if (element.$.id !== id) {
            list.push(element)
        }
       });
       listObj.catalog.book = list;
        LibraryDAO.writeXMLFile(listObj);
        callback();
    };

}());
