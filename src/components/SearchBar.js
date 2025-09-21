import React, { useState } from 'react';

function SearchBar({ setSearch, setLanguage, setSort }) {
  const [term, setTerm] = useState('');
  const [language, setLang] = useState('');

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search repositories..."
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Language (optional)"
        value={language}
        onChange={e => setLang(e.target.value)}
      />
      <select
        className="border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={e => setSort(e.target.value)}
        defaultValue="stars"
      >
        <option value="stars">Stars</option>
        <option value="updated">Recently Updated</option>
        <option value="forks">Forks</option>
      </select>
      <button
        className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700 transition-colors duration-200"
        onClick={() => {
          setSearch(term);
          setLanguage(language);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
