'use strict'
//Check if the input for title is valid
var checkTitle = function (title) {
  if (typeof(title) === 'string' && title.length < 40 && title.length > 0) {
    return true;
  } else {
    return false;
  }
};
//Check if the input for author is valid
var checkAuthor = function (author) {
  if (typeof(author) === 'string' && author.length < 40 && author.length > 0) {
    return true;
  } else {
    return false;
  }
};
//Check if the input for genre is valid
var checkGenre = function (genre) {
  if (typeof(genre) === 'string' && genre.length < 40 && genre.length > 0) {
    return true;
  } else {
    return false;
  }
};
//Check if the input for publishDate is valid
var checkPublishDate = function (publishDate) {
  if (typeof(publishDate) === 'string' && publishDate.length < 11 && publishDate.length > 0) {
    return true;
  } else {
    return false;
  }
};
//Check if the input for price is valid
var checkPrice = function (price) {
  if (typeof(price) === 'string' && price.length < 8 && price.length > 0) {
    return true;
  } else {
    return false;
  }
};
//Check if the input for description is valid
var checkDescription = function (description) {
  if (typeof(description) === 'string' && description.length < 400 && description.length > 0) {
    return true;
  } else {
    return false;
  }
};
//returns an object tat can be written to the xml file.
var getXmlBookObj = function (data, id) {
  var XMLBookObj = {$: {id: ""}, 
    author: [data.author],
    title: [data.title],
    genre: [data.genre], 
    price: [data.price],
    publish_date: [data.publish_date],
    description: [data.description]
  }
  if(id) {
    XMLBookObj.$.id = id;
  } else {
    XMLBookObj.$.id = data.id;
  }
  return XMLBookObj;
};
//collector that checks if all input is valid.
var isInputValid = function (data) {
  var title = checkTitle(data.title);
  var author = checkAuthor(data.author);
  var price = checkPrice(data.price);
  var description = checkDescription(data.description);
  var genre = checkGenre(data.genre);
  var publishDate = checkPublishDate(data.publish_date);
  return (title && author && price && description && genre && publishDate);
};
//returns a new id for a new book to be added.
var getNewId = function(arr) {
  if (arr.length > 0) {
    var copy = arr.slice(0);
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
  } else {
    newId = 1;
  }
  return newId;
}
module.exports = {
  checkTitle,
  checkAuthor, 
  checkDescription,
  checkGenre,
  checkPrice, 
  checkPublishDate, 
  isInputValid,
  getXmlBookObj,
  getNewId
};