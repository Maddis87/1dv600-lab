var LibraryDAO = require('../app/dao/LibraryDAO');

function copyXML() {
  LibraryDAO.readXMLFile(function (obj) {
    return obj;
  })
};

module.exports = {
  copyXML

}