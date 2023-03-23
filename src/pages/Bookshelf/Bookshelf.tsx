import { useContext } from 'react';
import BookList from '../../components/BookList';
import { BookshelfContext } from '../../context/BookshelfProvider';

const Bookshelf = () => {
  const { books } = useContext(BookshelfContext);

  return (
    <div>
      <h1>My Bookshelf</h1>
      <BookList books={books} fromGoogle={false} />
    </div>
  );
};
export default Bookshelf;
