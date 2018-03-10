
function createBook(id, title, author, genre, publishDate, price, description) {
  if (title && typeof(title) === 'string' && author && typeof(author) === 'string') {
    return {id: id, title: title, author: author, genre: genre, publishDate: publishDate,
      price: price, description: description}
  } else {
    return false;
  }
}
module.exports = {
  createBook
}