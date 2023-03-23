import { Dialog } from '@headlessui/react';
import { X as Close } from 'react-feather';

import { useContext } from 'react';
import { BookshelfContext } from '../../context/BookshelfProvider';
import { UserContext } from '../../context/UserProvider';
import useBookshelf from '../../hooks/useBookshelf';
import Button from '../Button';
import './Dialog.css';

interface Props {
  book: Book;
  isOpen: boolean;
  handleDismiss: () => void;
}
const BookDialog: React.FC<Props> = (props: Props) => {
  const { user } = useContext(UserContext);
  const { books, addBook, removeBook } = useContext(BookshelfContext);
  const { saveToBookshelf } = useBookshelf({ userId: '' });

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
        <Dialog.Title>{props.book.title}</Dialog.Title>
        <Button
          label={'Remove from my bokshelf'}
          onClick={handleRemoveFromBookshelf}
        />
        <Dialog.Description className='description'>
          {props.book.description}
        </Dialog.Description>
        <button onClick={props.handleDismiss}>Deactivate</button>
        <button onClick={props.handleDismiss}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default BookDialog;
