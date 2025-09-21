import React, { useState } from 'react';
import RepoChart from './RepoChart';

function RepoCard({ repo }) {
  const [showChart, setShowChart] = useState(false);

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (!bookmarks.some(item => item.id === repo.id)) {
      bookmarks.push({ id: repo.id, name: repo.full_name, url: repo.html_url });
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      window.dispatchEvent(new Event('storage'));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-blue-800 mb-2 hover:underline"
      >
        {repo.full_name}
      </a>
      <p className="text-gray-700 flex-grow">{repo.description}</p>
      <div className="flex items-center gap-4 mt-3 text-xs text-gray-600">
        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg">
          ⭐ {repo.stargazers_count}
        </span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg">
          🍴 {repo.forks_count}
        </span>
        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg">{repo.language || 'Unknown'}</span>
      </div>
      <div className="mt-5 flex gap-3">
        <button
          onClick={handleBookmark}
          className="bg-green-600 text-white px-3 py-1 rounded transition hover:bg-green-700 font-semibold"
        >
          Bookmark
        </button>
        <button
          onClick={() => setShowChart(!showChart)}
          className="bg-purple-600 text-white px-3 py-1 rounded transition hover:bg-purple-700 font-semibold"
        >
          {showChart ? 'Hide' : 'Show'} Stats
        </button>
      </div>
      {showChart && <RepoChart repo={repo} />}
    </div>
  );
}

export default RepoCard;
