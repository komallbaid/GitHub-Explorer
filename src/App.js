import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import Bookmarks from './components/Bookmarks';
import StarsChart from './components/StarsChart';

function App() {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('');
  const [sort, setSort] = useState('stars');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        let searchQuery = search ? `${search} in:name,description` : '';
        if (language) searchQuery += ` language:${language}`;
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${encodeURIComponent(
            searchQuery || 'stars:>10000'
          )}&sort=${sort}&order=desc&per_page=20`
        );
        const data = await response.json();
        setRepos(data.items || []);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setRepos([]);
      }
      setLoading(false);
    };

    if (search || language) {
      fetchRepos();
    }
  }, [search, language, sort]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <header className="bg-blue-700 py-5 shadow">
        <h1 className="text-3xl text-white font-extrabold text-center tracking-wide">
          GitHub Explorer
        </h1>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <SearchBar setSearch={setSearch} setLanguage={setLanguage} setSort={setSort} />
        
        <Bookmarks />

        {loading ? (
          <div className="text-center text-blue-600 font-semibold text-lg mt-10">Loading...</div>
        ) : (
          <>
            <RepoList repos={repos} />
            <div className="my-8">
              <StarsChart repos={repos} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
