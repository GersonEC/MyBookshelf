import { useState } from 'react';
import BookDialog from '../Dialog';
import Card from './Card';

interface Props {
  book: GoogleBook;
}

export const BookCard: React.FC<Props> = ({ book }) => {
  const defaultCover = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : '';
  const [isOpen, setIsOpen] = useState(false);

  const handleDismiss = () => setIsOpen(false);

  return (
    <div>
      <Card backgroundImage={defaultCover} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <BookDialog isOpen={isOpen} handleDismiss={handleDismiss} book={book} />
      )}
    </div>
  );
};
