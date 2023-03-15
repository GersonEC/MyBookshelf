import { useMutation } from '@tanstack/react-query';
import { QUERY_KEY } from '../utils/constants';

interface Payload {
  user: User;
  book: Book;
}
const saveToBookshelf = async (payload: Payload) => {
  const res = await fetch(`http://localhost:8080/saveToBookshelf`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  return json;
};

const useBookshelf = () => {
  const mutation = useMutation([QUERY_KEY.bookshelf], saveToBookshelf, {
    onSuccess: () => null,
    onError: () => null,
  });

  return mutation;
};

export default useBookshelf;
