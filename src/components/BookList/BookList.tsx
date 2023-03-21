import { BookCard } from '../Card/BookCard';

interface Props {
  books: GoogleBook[];
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
