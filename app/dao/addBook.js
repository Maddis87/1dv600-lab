'use strict'

var checkTitle = function (title) {
  if (typeof(title) === 'string' && title.length < 40 && title.length > 0) {
    return true;
  } else {
    return false;
  }
};
var checkAuthor = function (author) {
  if (typeof(author) === 'string' && author.length < 40 && author.length > 0) {
    return true;
  } else {
    return false;
  }
};
var checkGenre = function (genre) {
  if (typeof(genre) === 'string' && genre.length < 40 && genre.length > 0) {
    return true;
  } else {
    return false;
  }
};
var checkPublishDate = function (publishDate) {
  if (typeof(publishDate) === 'string' && publishDate.length < 11 && publishDate.length > 0) {
    return true;
  } else {
    return false;
  }
};
var checkPrice = function (price) {
  if (typeof(price) === 'string' && price.length < 8 && price.length > 0) {
    return true;
  } else {
    return false;
  }
};
var checkDescription = function (description) {
  if (typeof(description) === 'string' && description.length < 400 && description.length > 0) {
    return true;
  } else {
    return false;
  }
};
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
} 

var isInputValid = function (data) {
  var title = checkTitle(data.title);
  var author = checkAuthor(data.author);
  var price = checkPrice(data.price);
  var description = checkDescription(data.description);
  var genre = checkGenre(data.genre);
  var publishDate = checkPublishDate(data.publish_date);
  return (title && author && price && description && genre && publishDate);
};
module.exports = {
  checkTitle,
  checkAuthor, 
  checkDescription,
  checkGenre,
  checkPrice, 
  checkPublishDate, 
  isInputValid,
  getXmlBookObj
};