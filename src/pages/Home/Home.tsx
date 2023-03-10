import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookList from '../../components/BookList';
import Button from '../../components/Button';
import useUsers from '../../hooks/useUsers';
import useVolumes from '../../hooks/useVolumes';
import { BooksWrapper } from './Home.styles';

// const fetchVolume = async (id: string) => {
//   const res = await fetch(`${BASE_URL}/${id}`);
//   const json = await res.json();
//   return json;
// };

const Home = () => {
  const usersQuery = useUsers();
  const [term, setTerm] = useState('');
  const mutation = useVolumes(term);

  const searchVolumes = async () => {
    mutation.mutate();
  };

  if (mutation.status === 'loading') return <h1>Loading...</h1>;
  if (mutation.status === 'error') return <h1>Error</h1>;

  //"Cx6aDwAAQBAJ"
  // const searchVolume = async () => {
  //   const books = await fetchVolume(search);
  //   setSearch('');
  // };
  console.log(usersQuery.data);

  return (
    <>
      <h1>Home</h1>
      <p>
        User name:{' '}
        {usersQuery.status === 'success' ? usersQuery.data[0].name : ''}
      </p>
      <Button label='Ciao' onClick={() => alert('ciao')} />
      <Link to='/bookshelf'>Bookshelf</Link>
      <br />
      <Link to='/signup'>Sign up</Link>
      <br />
      <Link to='/signin'>Sign in</Link>
      <div>
        <label htmlFor='volumesSearch'>Search Volumes</label>
        <input
          name='volumesSearch'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
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
        {mutation.data && <BookList books={mutation.data.items as Book[]} />}
      </BooksWrapper>
    </>
  );
};

export default Home;
