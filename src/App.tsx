import { useState } from 'react';

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

function App() {
  const [search, setSearch] = useState('');

  const searchVolumes = async () => {
    const books = await fetchVolumes(search);
    console.log(books);
    setSearch('');
  };

  //"Cx6aDwAAQBAJ"
  const searchVolume = async () => {
    const books = await fetchVolume(search);
    console.log(books);
    setSearch('');
  };

  return (
    <div>
      <header>
        <div>
          <label htmlFor='volumesSearch'>Search Volumes</label>
          <input
            name='volumesSearch'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchVolumes}>Search</button>
        </div>
        <div>
          <label htmlFor='volumeSearch'>Search specific Volume</label>
          <input
            name='volumeSearch'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchVolume}>Search</button>
        </div>
      </header>
    </div>
  );
}

export default App;
