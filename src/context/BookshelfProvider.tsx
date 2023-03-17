import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import useBookshelf from '../hooks/useBookshelf';
import { UserContext } from './UserProvider';

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

const BookshelfProvider = ({ children }: PropsWithChildren) => {
  const { user } = useContext(UserContext);
  const { userBookshelf } = useBookshelf({ userId: user?.id ?? '' });
  const [books, setBooks] = useState<Book[]>(userBookshelf.data ?? []);

  useEffect(() => {
    if (userBookshelf.data) {
      setBooks(userBookshelf.data);
    }
  }, [userBookshelf.data]);

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
