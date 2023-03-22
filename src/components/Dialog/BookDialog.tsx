import { Dialog } from '@headlessui/react';
import { X as Close } from 'react-feather';

import { useContext } from 'react';
import { BookshelfContext } from '../../context/BookshelfProvider';
import { UserContext } from '../../context/UserProvider';
import useBookshelf from '../../hooks/useBookshelf';
import { mapGoogleBooksToBook } from '../../utils/books';
import Button from '../Button';
import './Dialog.css';

interface Props {
  book: GoogleBook;
  isOpen: boolean;
  handleDismiss: () => void;
}
const BookDialog: React.FC<Props> = (props: Props) => {
  const { user } = useContext(UserContext);
  const { books, addBook, removeBook } = useContext(BookshelfContext);
  const { saveToBookshelf, saveToBookshelf2 } = useBookshelf({ userId: '' });
  const isOnBookshelf = Boolean(
    books.find((book) => book.id === props.book.id)
  );

  const handleAddToBookshelf = () => {
    if (!user) {
      console.log('There is no user logged in.');
      return;
    }
    saveToBookshelf({
      userId: user.id,
      book: props.book,
    });
    addBook(props.book);
  };

  //TODO: DELETE THIS
  const handleSaveBook = () => {
    //TODO: CREATE TRANSFORM BOOK METHOD.
    const bookToSend = mapGoogleBooksToBook(props.book);
    saveToBookshelf2({
      book: bookToSend,
    });
  };

  const handleRemoveFromBookshelf = () => {
    removeBook(props.book.id);
  };

  return (
    <Dialog
      className='wrapper'
      open={props.isOpen}
      onClose={props.handleDismiss}
    >
      <div className='backdrop' onClick={props.handleDismiss} />
      <Dialog.Panel className={'dialog'}>
        <button className='closeBtn' onClick={props.handleDismiss}>
          <Close />
        </button>
        <Dialog.Title>{props.book.volumeInfo.title}</Dialog.Title>
        <Button
          label={
            isOnBookshelf ? 'Remove from my bokshelf' : 'Add to my bookshelf'
          }
          onClick={
            isOnBookshelf ? handleRemoveFromBookshelf : handleAddToBookshelf
          }
        />
        <Button label='save the book' onClick={handleSaveBook} />
        <Dialog.Description className='description'>
          {props.book.volumeInfo.description}
        </Dialog.Description>
        <button onClick={props.handleDismiss}>Deactivate</button>
        <button onClick={props.handleDismiss}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default BookDialog;
