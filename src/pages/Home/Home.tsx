import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import BookList from '../../components/BookList';
import Button from '../../components/Button';
import { UserContext } from '../../context/UserProvider';
import useSignout from '../../hooks/useSignout';
import useVolumes from '../../hooks/useVolumes';
import { BooksWrapper } from './Home.styles';

// const fetchVolume = async (id: string) => {
//   const res = await fetch(`${BASE_URL}/${id}`);
//   const json = await res.json();
//   return json;
// };

const Home = () => {
  const [term, setTerm] = useState('');
  const { user } = useContext(UserContext);
  const mutation = useVolumes(term);
  const signout = useSignout();
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

  return (
    <main>
      <h1>Home of: {user?.email ?? 'nobody'}</h1>
      <div>
        <Button onClick={() => signout()} label='Sign out' />
      </div>
      <Button label='Ciao' onClick={() => alert('ciao')} />
      <Link to='/bookshelf'>Bookshelf</Link>
      <br />
      <Link to='/sign-up'>Sign up</Link>
      <br />
      <Link to='/sign-in'>Sign in</Link>
      <div>
        <label htmlFor='volumesSearch'>Search Volumes</label>
        <input
          name='volumesSearch'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button onClick={searchVolumes} label='Search' />
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
        {mutation.data && (
          <BookList books={mutation.data.items as GoogleBook[]} />
        )}
      </BooksWrapper>
    </main>
  );
};

export default Home;
