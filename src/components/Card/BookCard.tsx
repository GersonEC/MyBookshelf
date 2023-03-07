import { useEffect, useState } from 'react';
import Card from './Card';

interface Props {
  book: Book;
}

export const BookCard: React.FC<Props> = ({ book }) => {
  const [cover, setCover] = useState('');

  useEffect(() => {
    const getCover = async () => {
      const res = await fetch(book.selfLink);
      const json = (await res.json()) as Book;
      const cover = json.volumeInfo.imageLinks.small ?? '';
      setCover(cover);
    };
    getCover();
  }, [book.selfLink]);

  return (
    <Card backgroundImage={cover ?? book.volumeInfo.imageLinks.thumbnail} />
  );
};
