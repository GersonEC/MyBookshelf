import { BookCard } from '../Card/BookCard';

interface Props {
  books: Book[];
}

const BookList: React.FC<Props> = ({ books }) => {
  return (
    <>
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </>
  );
};

export default BookList;
