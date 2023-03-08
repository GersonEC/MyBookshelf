import React, { useState } from 'react';

export const BookshelfContext = React.createContext({});

const BookshelfProvider = ({ children }: any) => {
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <BookshelfContext.Provider
      value={{
        books,
        setBooks,
      }}
    >
      {children}
    </BookshelfContext.Provider>
  );
};

export default BookshelfProvider;
