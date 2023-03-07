import Card from './Card';

interface Props {
  book: Book;
}

export const BookCard: React.FC<Props> = ({ book }) => {
  const defaultCover = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : '';

  return <Card backgroundImage={defaultCover} />;
};
