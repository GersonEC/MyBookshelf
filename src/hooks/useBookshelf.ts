import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../utils/constants';

interface Payload {
  userId: string;
  book: GoogleBook;
}

interface Payload2 {
  book: Book;
}

const persistInBookshelf = async ({ userId, book }: Payload) => {
  const res = await fetch(`http://localhost:8080/saveToBookshelf`, {
    method: 'POST',
    body: JSON.stringify({
      userId,
      book,
    }),
  });
  const json = await res.json();
  return json;
};

const persistInBookshelf2 = async ({ book }: Payload2) => {
  const res = await fetch(`http://localhost:8080/bookshelf`, {
    method: 'POST',
    body: JSON.stringify({
      book,
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
  const mutation = useMutation(
    [QUERY_KEY.saveInBookshelf],
    persistInBookshelf,
    {
      onSuccess: () => null,
      onError: () => null,
    }
  );

  //TODO: DELETE THIS
  const mutation2 = useMutation(
    ['bookshelf'],
    persistInBookshelf2,
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

  const saveToBookshelf = ({ userId, book }: Payload) => {
    mutation.mutate({
      userId,
      book,
    });
  };

  //TODO: DELETE THIS
  const saveToBookshelf2 = ({book} : Payload2) => {
    mutation2.mutate({
      book,
    });
  };

  return {
    userBookshelf,
    saveToBookshelf,
    saveToBookshelf2
  };
};

export default useBookshelf;
