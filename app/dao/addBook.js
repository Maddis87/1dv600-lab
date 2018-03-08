'use strict'

var checkTitle = function (title) {
  if (typeof(title) === 'string' && title.length < 40 && title.length > 0) {
    return true;
  } else {
    return false;
  }
}
var checkAuthor = function (author) {
  if (typeof(author) === 'string' && title.length < 40 && title.length > 0) {
    return true;
  } else {
    return false;
  }
}
module.exports = {
  checkTitle,
  checkAuthor
}