import { useState } from 'react';
import BookDialog from '../Dialog/BookDialog';
import Card from './Card';

interface Props {
  book: Book;
}

export const BookCard: React.FC<Props> = ({ book }) => {
  const defaultCover = book.thumbnail;
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
