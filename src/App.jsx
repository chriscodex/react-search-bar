import { useState } from 'react';

import './App.css';
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from './components/SearchResultsList';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="bg-[#eee] w-screen h-screen">
      <div className="pt-[20vh] w-2/5 mx-auto flex flex-col items-center min-w-[200px]">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
    </div>
  );
}

export default App;
