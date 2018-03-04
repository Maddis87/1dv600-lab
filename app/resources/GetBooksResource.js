

(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    let book = require('../dao/book');
    /**
    var bookList = [
        book.createBook('1', 'Birds', 'James Steele', 'non-fiction', '2012-11.22', '150kr', 'A book containing facts about birds.'),
        book.createBook('2', 'WildWest', 'Mary-Anne Feldt', 'fiction', '1999-12-30', '200kr', 'A book about the life in the wild west'),
        book.createBook('3', 'The worlds horses!', 'Sophie Grimer', 'non-fiction', '2010-05-14', '200kr', 'A book about all the horsebreeds in the world.')
    ];
    var booksJson = JSON.stringify(bookList);
    */
    
    module.exports = function (callback, title) {   
        // console.log(bookList); subtask A
        // console.log(booksJson); subtask B
        //callback(bookList);
        
        var bookArr = [];
    LibraryDAO.readXMLFile( obj => {
        obj.catalog.book.map(element => {
            var b = book.createBook(element.$.id, element.title.toString(), element.author.toString(),
             element.genre.toString(), element.publish_date.toString(), element.price.toString(), 
             element.description.toString());
            bookArr.push(b);
            });
            callback(JSON.stringify(bookArr));
        });
    };

}());
