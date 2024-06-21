import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('');
  const urlApi = 'https://jsonplaceholder.typicode.com/users';

  const fetchData = (value) => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="w-full h-10 border-none rounded-lg px-4 shadow-md bg-white flex items-center">
      <FaSearch className="text-blue-600 mr-2" />
      <input
        placeholder="Type to search..."
        className="bg-transparent border-none h-full text-xl w-full ml-1.5 focus:outline-none"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
