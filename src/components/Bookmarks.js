import React, { useEffect, useState } from 'react';

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const updateBookmarks = () => {
      const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setBookmarks(storedBookmarks);
    };
    updateBookmarks();
    window.addEventListener('storage', updateBookmarks);
    return () => window.removeEventListener('storage', updateBookmarks);
  }, []);

  if (!bookmarks.length) return null;

  return (
    <div className="bg-yellow-100 rounded-md p-4 mb-8">
      <h3 className="text-lg font-semibold mb-3">Bookmarked Repositories</h3>
      <ul className="list-disc pl-6 text-blue-700 space-y-1">
        {bookmarks.map(({ id, name, url }) => (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookmarks;
