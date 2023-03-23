import { useState } from 'react';
import GoogleBookDialog from '../Dialog/GoogleBookDialog';
import Card from './Card';

interface Props {
  book: GoogleBook;
}

export const GoogleBookCard: React.FC<Props> = ({ book }) => {
  const defaultCover = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : '';
  const [isOpen, setIsOpen] = useState(false);

  const handleDismiss = () => setIsOpen(false);

  return (
    <div>
      <Card backgroundImage={defaultCover} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <GoogleBookDialog
          isOpen={isOpen}
          handleDismiss={handleDismiss}
          book={book}
        />
      )}
    </div>
  );
};
