import { BookCard } from '../Card/BookCard';
import { GoogleBookCard } from '../Card/GoogleBookCard';

interface GoogleBookListProps {
  fromGoogle: true;
  books: GoogleBook[];
}

interface BookListProps {
  fromGoogle: false;
  books: Book[];
}

type Props = GoogleBookListProps | BookListProps;

const BookList: React.FC<Props> = ({ books, fromGoogle }) => {
  if (fromGoogle) {
    return (
      <div>
        {books.map((book) => {
          return <GoogleBookCard key={book.id} book={book} />;
        })}
      </div>
    );
  }

  return (
    <div>
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
