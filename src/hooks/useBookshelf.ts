import { useMutation, useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { BookshelfContext } from '../context/BookshelfProvider';
import { QUERY_KEY } from '../utils/constants';

interface SavePayload {
  userId: string;
  book: Book;
}
interface RemovePayload {
  userId: string;
  bookId: string;
}

const persistInBookshelf = async ({
  userId,
  book,
}: SavePayload): Promise<Book> => {
  const res = await fetch(`http://localhost:8080/bookshelf`, {
    method: 'POST',
    body: JSON.stringify({
      userId,
      book,
    }),
  });
  const json = await res.json();
  return json;
};

const deleteFromBookshelf = async ({
  userId,
  bookId,
}: RemovePayload): Promise<Book> => {
  const res = await fetch(`http://localhost:8080/bookshelf`, {
    method: 'DELETE',
    body: JSON.stringify({
      userId,
      bookId,
    }),
  });
  const json = await res.json();
  return json;
};

const fetchUserBookshelf = async (userId: string) => {
  const res = await fetch(`http://localhost:8080/bookshelf/${userId}`);
  const json = await res.json();
  return json;
};

interface UseBookshelfProps {
  userId: string;
}

const useBookshelf = ({ userId }: UseBookshelfProps) => {
  const { books, addBook, removeBook } = useContext(BookshelfContext);

  const saveMutation = useMutation(
    [QUERY_KEY.saveInBookshelf],
    persistInBookshelf,
    {
      onSuccess: (book) => {
        const alreadyExist = Boolean(books.find((b) => b.id === book.id));
        if (!alreadyExist) addBook(book);
      },
      onError: () => null,
    }
  );

  const removeMutation = useMutation(
    [QUERY_KEY.removeFromBookshelf],
    deleteFromBookshelf,
    {
      onSuccess: () => null,
      onError: () => null,
    }
  );

  const userBookshelf = useQuery(
    [QUERY_KEY.retrieveBookshelf],
    () => fetchUserBookshelf(userId),
    {
      onSuccess: () => null,
      onError: () => null,
      enabled: Boolean(userId),
      refetchOnMount: false,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const saveToBookshelf = ({ userId, book }: SavePayload) => {
    saveMutation.mutate({
      userId,
      book,
    });
  };

  const removeFromBookshelf = ({ userId, bookId }: RemovePayload) => {
    removeMutation.mutate({
      userId,
      bookId,
    });
    removeBook(bookId);
  };

  return {
    userBookshelf,
    saveToBookshelf,
    removeFromBookshelf,
  };
};

export default useBookshelf;
