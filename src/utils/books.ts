export const mapGoogleBooksToBook = (googleBook: GoogleBook): Book => {
  const book: Book = {
    etag: googleBook.etag,
    id: googleBook.id,
    selfLink: googleBook.selfLink,
    description: googleBook.volumeInfo.description,
    smallThumbnail: googleBook.volumeInfo.imageLinks.smallThumbnail,
    thumbnail: googleBook.volumeInfo.imageLinks.thumbnail,
    imageExtraLarge: googleBook.volumeInfo.imageLinks.extraLarge,
    imageLarge: googleBook.volumeInfo.imageLinks.large,
    imageMedium: googleBook.volumeInfo.imageLinks.medium,
    imageSmall: googleBook.volumeInfo.imageLinks.small,
    mainCategory: googleBook.volumeInfo.categories[0],
    pageCount: googleBook.volumeInfo.pageCount,
    publishedDate: googleBook.volumeInfo.publishedDate,
    publisher: googleBook.volumeInfo.publisher,
    title: googleBook.volumeInfo.title,
    subtitle: googleBook.volumeInfo.subtitle,
  };
  return book;
};
