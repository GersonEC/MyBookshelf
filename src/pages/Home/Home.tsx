import { useState } from 'react';
import BookList from '../../components/BookList';
import { BooksWrapper } from './Home.styles';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

const fetchVolumes = async (term: string) => {
  const res = await fetch(`${BASE_URL}?q=${term}`);
  const json = await res.json();
  return json;
};

const fetchVolume = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const json = await res.json();
  return json;
};

const Home = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

  const searchVolumes = async () => {
    const response = await fetchVolumes(search);
    console.log(response.items[0]);
    setBooks(response.items);
    setSearch('');
  };

  //"Cx6aDwAAQBAJ"
  // const searchVolume = async () => {
  //   const books = await fetchVolume(search);
  //   setSearch('');
  // };

  return (
    <>
      <h1>Home</h1>
      <div>
        <label htmlFor='volumesSearch'>Search Volumes</label>
        <input
          name='volumesSearch'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchVolumes}>Search</button>
      </div>
      {/* <div>
        <label htmlFor='volumeSearch'>Search specific Volume</label>
        <input
          name='volumeSearch'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchVolume}>Search</button>
      </div> */}
      <BooksWrapper>
        {books.length > 0 && <BookList books={books} />}
      </BooksWrapper>
    </>
  );
};

export default Home;
