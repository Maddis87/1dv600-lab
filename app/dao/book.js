
function createBook(id, title, author, genre, publishDate, price,description) {
  return {id: id, title: title, author: author,genre: genre,publishDate: publishDate,
     price: price, description: description}
}

module.exports = {
  createBook
}