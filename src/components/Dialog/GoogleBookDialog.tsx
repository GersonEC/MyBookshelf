import { Dialog } from '@headlessui/react';
import { X as Close } from 'react-feather';

import { useContext } from 'react';
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
const GoogleBookDialog: React.FC<Props> = (props: Props) => {
  const { user } = useContext(UserContext);
  const { saveToBookshelf } = useBookshelf({ userId: '' });

  const handleAddToBookshelf = () => {
    if (!user) {
      console.log('There is no user logged in.');
      return;
    }
    const bookToPersist = mapGoogleBooksToBook(props.book);
    saveToBookshelf({
      userId: user.id,
      book: bookToPersist,
    });
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
            /*isOnBookshelf ? 'Remove from my bokshelf' :*/ 'Add to my bookshelf'
          }
          onClick={
            /*isOnBookshelf ? handleRemoveFromBookshelf :*/ handleAddToBookshelf
          }
        />
        <Dialog.Description className='description'>
          {props.book.volumeInfo.description}
        </Dialog.Description>
        <button onClick={props.handleDismiss}>Deactivate</button>
        <button onClick={props.handleDismiss}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default GoogleBookDialog;
