import { useState } from 'react';
import Dialog from '../Dialog';
import Card from './Card';

interface Props {
  book: Book;
}

export const BookCard: React.FC<Props> = ({ book }) => {
  const defaultCover = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : '';
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Card backgroundImage={defaultCover} onClick={() => setIsOpen(true)} />
      {isOpen && <Dialog />}
    </>
  );
};
