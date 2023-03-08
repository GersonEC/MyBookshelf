import React, { useState } from 'react';

interface BookshelfContextProps {
  books: Book[];
  addBook: (book: Book) => void;
  removeBook: (id: string) => void;
}

export const BookshelfContext = React.createContext<BookshelfContextProps>({
  books: [],
  addBook: () => null,
  removeBook: () => null,
});

const BookshelfProvider = ({ children }: any) => {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (book: Book) => {
    setBooks([...books, book]);
  };

  const removeBook = (id: string) => {
    const nextBooks = books.filter((book) => book.id !== id);
    setBooks(nextBooks);
  };

  return (
    <BookshelfContext.Provider
      value={{
        books,
        addBook,
        removeBook,
      }}
    >
      {children}
    </BookshelfContext.Provider>
  );
};

export default BookshelfProvider;
